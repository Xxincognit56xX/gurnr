# gurnr
[![GitHub Repo stars](https://img.shields.io/github/stars/Xxincognit56xX/gurnr?style=flat&logo=github&color=e3b341)](https://github.com/Xxincognit56xX/gurnr/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Xxincognit56xX/gurnr?style=flat&logo=github&color=2ea043)](https://github.com/Xxincognit56xX/gurnr/forks)
[![GitHub watchers](https://img.shields.io/github/watchers/Xxincognit56xX/gurnr?style=flat&logo=github&color=8957e5)](https://github.com/Xxincognit56xX/gurnr/watchers)

A desktop app that learns your face from a few photos, finds it in videos, and applies filters and effects to it. Everything runs locally on your computer.

## How it works

1. **Train**: add a handful of photos of your face. gurnr fine-tunes a local face model so it recognizes you specifically.
2. **Import a video**: upload an existing video or record one in the app.
3. **Find your face**: gurnr locates and tracks your face in every frame, ignoring other people.
4. **Apply a filter**: pick an effect and gurnr renders it onto your face only.

## Filters from Blender

Filters such as face distortions can be made in [Blender](https://www.blender.org/) and imported into gurnr. The export format and workflow will be documented here once filter import is implemented.

## Privacy

- Photos, videos and trained models stay on your computer.
- Nothing is uploaded to a server, and training does not need an internet connection.
- You can delete your trained face model at any time from Settings.

## Responsible use

gurnr is meant for editing videos of **yourself**. Only train it on your own face, or on the face of someone who has clearly agreed to it. Do not use it to make misleading videos of real people to harass them or use the video for any other reason.

## Built with

Electron. The project started from [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate). Face detection uses [yolov7-face](https://github.com/derronqi/yolov7-face), included in [`backend/yolov7-face`](backend/yolov7-face).

## License

Copyright (C) 2026 Xxincognit56xX

gurnr is free software: you can redistribute it and/or modify it under the terms of the [GNU General Public License, version 3](LICENSE). It comes with no warranty.

It includes code from electron-react-boilerplate (MIT) and yolov7-face (GPL-3.0). See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for their notices. The pretrained face weights are not included and are licensed for non-commercial research only.
