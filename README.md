# gurnr
[![GitHub Repo stars](https://img.shields.io/github/stars/Xxincognit56xX/gurnr?style=flat&logo=github&color=e3b341)](https://github.com/Xxincognit56xX/gurnr/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Xxincognit56xX/gurnr?style=flat&logo=github&color=2ea043)](https://github.com/Xxincognit56xX/gurnr/forks)
[![GitHub watchers](https://img.shields.io/github/watchers/Xxincognit56xX/gurnr?style=flat&logo=github&color=8957e5)](https://github.com/Xxincognit56xX/gurnr/watchers)

A desktop app that finds every face in a video and applies filters and effects to them. Everything runs locally on your computer.

## How it works

1. **Import a video**: upload an existing video or record one in the app.
2. **Find faces**: gurnr detects and tracks every face in every frame.
3. **Apply a filter**: pick an effect and gurnr renders it onto the faces it found.
4. **Retrain the model (optional)**: the built-in face model works out of the box. If it misses faces in your kind of footage, you can retrain it on your own labeled photos.

## Filters from Blender

Filters such as face distortions can be made in [Blender](https://www.blender.org/) and imported into gurnr. The export format and workflow will be documented here once filter import is implemented.

## Privacy

- Videos, photos and models stay on your computer.
- Nothing is uploaded to a server, and neither face detection nor retraining needs an internet connection.
- You can delete a retrained model at any time from Settings.

## Responsible use

gurnr can apply effects to anyone's face in a video, so please use it responsibly:

- Only edit and share videos of people who have agreed to it, or that you otherwise have the right to edit and share.
- Only retrain the model on photos you have the right to use.
- Do not use gurnr to make misleading videos of real people, to impersonate anyone, or to harass, embarrass or harm someone.
- Laws about editing and sharing videos of people, including laws on deepfakes, differ between countries. You are responsible for following the ones that apply to you.

## Built with

Electron. The project started from [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate). Face detection uses [yolov7-face](https://github.com/derronqi/yolov7-face), included in [`backend/yolov7-face`](backend/yolov7-face).

## License

Copyright (C) 2026 Xxincognit56xX

gurnr is free software: you can redistribute it and/or modify it under the terms of the [GNU General Public License, version 3](LICENSE). It comes with no warranty.

It includes code from electron-react-boilerplate (MIT) and yolov7-face (GPL-3.0). See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for their notices. The pretrained face weights are not included and are licensed for non-commercial research only.
