# Upstream

This folder is a trimmed copy of [derronqi/yolov7-face](https://github.com/derronqi/yolov7-face),
commit `74a2a1df1439f7f5b87c87d7857d874f891acbdc`, licensed under GPL-3.0 (see
[LICENSE.md](LICENSE.md)). yolov7-face is based on
[WongKinYiu/yolov7](https://github.com/WongKinYiu/yolov7), also GPL-3.0.

Only what gurnr uses is kept: face detection (`detect.py`), training (`train.py`)
and its accuracy check (`test.py`), the code they import, and their config files.

## Pretrained weights

Weights are not included. Download one into `weights/` (ignored by git). They were
trained on [WIDER FACE](http://shuoyang1213.me/WIDERFACE/), which is licensed for
non-commercial research only.

| Model | Config | Input size | FLOPs (B) @640 | WIDER FACE val (easy / medium / hard) | Download |
| --- | --- | --- | --- | --- | --- |
| yolov7-lite-t | `cfg/yolov7-lite-t.yaml` | 640 | 0.8 | 88.7 / 85.2 / 71.5 | [Google Drive](https://drive.google.com/file/d/1HNXd9EdS-BJ4dk7t1xJDFfr1JIHjd5yb/view?usp=sharing) |
| yolov7-lite-s | `cfg/yolov7-lite-s.yaml` | 640 | 3.0 | 92.7 / 89.9 / 78.5 | [Google Drive](https://drive.google.com/file/d/1MIC5vD4zqRLF_uEZHzjW_f-G3TsfaOAf/view?usp=sharing) |
| yolov7-tiny | `cfg/yolov7-tiny-face.yaml` | 640 | 13.2 | 94.7 / 92.6 / 82.1 | [Google Drive](https://drive.google.com/file/d/1Mona-I4PclJr5mjX1qb8dgDeMpYyBcwM/view?usp=sharing) |
| yolov7s | `cfg/yolov7s-face.yaml` | 640 | 16.8 | 94.8 / 93.1 / 85.2 | [Google Drive](https://drive.google.com/file/d/1_ZjnNF_JKHVlq41EgEqMoGE2TtQ3SYmZ/view?usp=sharing) |
| yolov7 | `cfg/yolov7-face.yaml` | 640 | 103.4 | 96.9 / 95.5 / 88.0 | [Google Drive](https://drive.google.com/file/d/1oIaGXFd4goyBvB1mYDK24GLof53H9ZYo/view?usp=sharing) |
| yolov7-w6 | not included upstream | 960 | 89.0 | 96.4 / 95.0 / 88.3 | [Google Drive](https://drive.google.com/file/d/1U_kH7Xa_9-2RK2hnyvsyMLKdYB0h4MJS/view?usp=sharing) |

Numbers are from the upstream README.

## Removed from this copy

These upstream files are not part of this copy. Get them from the upstream commit
above if they're ever needed:

- `README.md`: the weights table above replaces the part gurnr needs
- `hubconf.py` (PyTorch Hub loader), `models/export.py` and `onnx_inference/`
  (ONNX export and inference), `models/hub/` (YOLOv3 configs), `utils/activations.py`
- `test_widerface.py`, `data/test.py`, `widerface_evaluate/`: WIDER FACE benchmark
  scripts, annotations and a prebuilt Linux binary
- `data/scripts/`: COCO and VOC dataset downloaders
- `utils/aws/`, `utils/google_app_engine/`, `utils/flask_rest_api/`, and the
  dataset-logging parts of `utils/wandb_logging/`: cloud and logging extras
- `cpp/`: the ncnn C++ demo with prebuilt libraries and model weights
- `utils/figures/`, `data/images/`, `data/qrcode_*.jpg`: a stock animation, COCO and
  WIDER FACE sample photos, and a QR code, owned by third parties
- `__pycache__/` folders that were committed upstream

## Changes from upstream

GPL-3.0 requires modified files to carry a notice of the change. List every
change here, with the date.

### 2026-11-02: compatibility with Python 3.12, NumPy >= 1.24 and PyTorch >= 2.6

- `utils/datasets.py`, `utils/general.py`: replaced `.astype(np.int)` with
  `.astype(int)`. `np.int` was an alias for `int` and was removed in NumPy 1.24.
- `models/experimental.py`, `train.py`, `detect.py`, `utils/general.py`,
  `utils/datasets.py`: added `weights_only=False` to `torch.load(...)`. Since
  PyTorch 2.6, `torch.load` only loads plain tensors by default, and yolov7
  checkpoints contain the full model. This runs code stored in the file, so only
  load weights you trust.
- `requirements.txt`: `onnxruntime==1.10.0` changed to `onnxruntime>=1.10.0`
  (1.10.0 has no Python 3.12 build), and added `setuptools<81`, which provides
  `pkg_resources` for `check_requirements` in `utils/general.py`.
- `utils/metrics.py`: replaced `np.trapz` with `np.trapezoid`, its new name
  (`np.trapz` was removed in NumPy 2.5).
- `models/yolo.py`: passed `indexing='ij'` to `torch.meshgrid` (3 places). This
  is the existing default, and newer PyTorch versions will require it to be set.
- `requirements.txt`: added `requests`, which `models/common.py` imports but
  upstream did not list.

### 2026-11-02: smooth, low-latency webcam streams

- `utils/datasets.py` (`LoadStreams`): the reader thread now reads every frame
  and keeps the newest, instead of keeping only every 4th frame and sleeping
  between reads (which let the camera's buffer fill up and the picture fall
  behind). `__next__` waits for a frame it hasn't returned yet instead of
  returning the same frame again. Also requests a 1-frame camera buffer and
  falls back to 30 FPS when a webcam reports 0 FPS.
- `detect.py`: removed a debug `print` of the top confidence on every frame. For
  live streams, timing is printed as an FPS summary once per second instead of
  a line per frame.

### 2026-11-02: trimmed to what gurnr uses

- Removed the files listed under "Removed from this copy".
