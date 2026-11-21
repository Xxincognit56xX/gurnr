# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

gurnr is a desktop app built with Electron, so its interface is web technology (React) running in a desktop window. It is packaged for Windows (NSIS installer), macOS and Linux (AppImage), and CI tests all three. The window opens at 1450×800 and can shrink to 1000×500.

## Users

Creators making fun edits: people who make videos for social media, YouTube or friends and want playful face effects and distortions on the people in their clips. They open gurnr with a video they already shot, want to get to an edited, shareable result, and then post it elsewhere.

## Product Purpose

gurnr finds every face in a video and applies filters and effects to them, entirely on the user's computer. It exists so creators can make face-effect edits without uploading their footage to a cloud service, signing up for an account, or paying for a subscription.

Success means a creator goes from a clip to a fun, finished edit on their own machine, and trusts that their footage never left it.

## Positioning

Compared with Snapchat, CapCut or TikTok filters, gurnr is:

- **100% local and private.** Videos and the face model stay on the computer. There is no account and no cloud, and after first setup face detection works offline.
- **Free and open source.** GPL-3.0, no ads, no subscriptions; anyone can inspect or change it.

## Operating Context

- The user works on a desktop or laptop computer, starting from video files they already have, and shares the result on social platforms outside gurnr.
- The interface is one desktop window with a sidebar: Home, Studio, Gallery, and Settings at the bottom.
  - **Home**: a news area with a patch notes section below it.
  - **Studio**: the video editor. A video player with a control strip, a timeline below it, and a side panel to the right of both. The whole editor always fits the window and never scrolls.
  - **Gallery** and **Settings**: empty placeholders so far.
- Face detection runs in a local Python backend (FastAPI on `127.0.0.1:8000`, models from yolov7-face). The app and backend talk only over localhost, and every request carries a per-session secret token.
- The UI deliberately does not feel like a browser: no text selection outside inputs, no link or image dragging, no scrollbars, no browser shortcuts, no reload/zoom/devtools.

## Capabilities and Constraints

Status: early development. The sidebar pages exist, but they are layouts without content or working controls yet.

Working today:

- Face detection with yolov7-face (5 facial keypoints per face) on images, video files and webcam, run from the command line on a local GPU.
- A local API skeleton with a status check and an image echo endpoint, protected by CORS and a secret token.
- The Home layout (news and patch notes areas) and the Studio editor layout (player, control strip, timeline, side panel).

Planned (described in the README, not built yet):

- Import a video.
- Detect and track every face in every frame.
- Apply an effect to the faces found.
- Import filters made in Blender, such as face distortions.
- News and patch notes content on Home.

Dropped:

- Retraining the face model. The Train page was removed. The training scripts (`train.py`, `test.py`) still exist in `backend/yolov7-face`, but gurnr does not use them.
- Recording a video inside the app. gurnr works on existing video files.
- A separate Filters page. Blender filters are still planned; where they appear in the app is not decided.

Terminology (sidebar labels): Home, Studio, Gallery, Settings.

Constraints:

- License: GPL-3.0. It includes electron-react-boilerplate (MIT) and yolov7-face (GPL-3.0); see `THIRD_PARTY_NOTICES.md` and `backend/yolov7-face/UPSTREAM.md`.
- The pretrained face weights are not in the repository and are licensed for non-commercial research only (trained on WIDER FACE). This fits gurnr as a free, non-commercial project; any future commercial use would need different weights.
- Users' videos and face photos must never be committed or uploaded.

Open decisions:

- Blender filter export format, import workflow, and where filters live in the app.
- What the Studio side panel will contain.
- Where news and patch notes come from, given that gurnr makes no network requests after setup.
- How the Python backend and model weights are installed or bundled for end users.
- Minimum hardware, including whether a GPU is required.
- How faces are tracked across frames, and whether effects can target specific faces.

## Brand Commitments

- Name: "gurnr", written in lowercase in the README, window title and installer.
- Free, open source, local-only: no ads, accounts, upsells or subscriptions.
- The app icon in `assets/` is still the electron-react-boilerplate placeholder and is not gurnr's brand. It must be replaced before release.

## Evidence on Hand

- `README.md`: product description, how it works, privacy and responsible-use text.
- `LICENSE` (GPL-3.0) and `THIRD_PARTY_NOTICES.md`.
- No users, testimonials, press, benchmarks, screenshots of finished features, release builds or download numbers exist yet. Future work must not invent them.

## Product Principles

1. **Nothing leaves the computer.** Footage, faces and the model stay local; no feature may require an account, a cloud upload or a network connection after setup.
2. **Free means free.** No ads, upsells, paywalls or dark patterns; the whole app is the open-source app.
3. **Fun first, fast to a result.** The shortest path from a clip to a playful, shareable edit matters more than advanced controls.
4. **Real faces deserve respect.** gurnr edits real people, so it keeps the responsible-use guidance visible and does not add features aimed at deceiving, impersonating or harassing anyone.
