# Third-party notices

gurnr is licensed under GPL-3.0 (see [LICENSE](LICENSE)). It includes code from the
projects below, which keep their own licenses.

## electron-react-boilerplate

gurnr started from [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate).

```
The MIT License (MIT)

Copyright (c) 2015-present Electron React Boilerplate

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## yolov7-face

[`backend/yolov7-face`](backend/yolov7-face) is a copy of
[derronqi/yolov7-face](https://github.com/derronqi/yolov7-face), based on
[WongKinYiu/yolov7](https://github.com/WongKinYiu/yolov7). Both are licensed under
GPL-3.0. See [backend/yolov7-face/UPSTREAM.md](backend/yolov7-face/UPSTREAM.md) for
the exact version and which upstream files are not included.

The pretrained face weights are not included. They were trained on
[WIDER FACE](http://shuoyang1213.me/WIDERFACE/), which is licensed for
non-commercial research only.

## npm packages

npm dependencies (Electron, React and others) keep their own licenses, listed in
each package under `node_modules`. Packaged builds include Electron's and
Chromium's license files.
