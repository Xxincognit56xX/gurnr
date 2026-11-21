# gurnr
[![GitHub Repo stars](https://img.shields.io/github/stars/Xxincognit56xX/gurnr?style=flat&logo=github&color=e3b341)](https://github.com/Xxincognit56xX/gurnr/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Xxincognit56xX/gurnr?style=flat&logo=github&color=2ea043)](https://github.com/Xxincognit56xX/gurnr/forks)
[![GitHub watchers](https://img.shields.io/github/watchers/Xxincognit56xX/gurnr?style=flat&logo=github&color=8957e5)](https://github.com/Xxincognit56xX/gurnr/watchers)

A desktop app that finds every face in a video and applies filters and effects to them. Everything runs locally on your computer.

## How it works

1. **Import a video**: open a video file from your computer.
2. **Find faces**: gurnr detects and tracks every face in every frame.
3. **Apply a filter**: pick an effect and gurnr renders it onto the faces it found.

## The app

- **Home**: news and patch notes.
- **Studio**: the video editor, with a player, a timeline and a side panel. It always fits the window.
- **Gallery**: your edited videos.
- **Settings**: app settings.

## Filters from Blender

Filters such as face distortions can be made in [Blender](https://www.blender.org/) and imported into gurnr. The export format and workflow will be documented here once filter import is implemented.

## Privacy

- Your videos and the face model stay on your computer.
- Nothing is uploaded to a server, and face detection does not need an internet connection.

## Responsible use

gurnr can apply effects to anyone's face in a video, so please use it responsibly:

- Only edit and share videos of people who have agreed to it, or that you otherwise have the right to edit and share.
- Do not use gurnr to make misleading videos of real people, to impersonate anyone, or to harass, embarrass or harm someone.
- Laws about editing and sharing videos of people, including laws on deepfakes, differ between countries. You are responsible for following the ones that apply to you.

## Built with

Electron. The project started from [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate). Face detection uses [yolov7-face](https://github.com/derronqi/yolov7-face), included in [`backend/yolov7-face`](backend/yolov7-face).

## License

Copyright (C) 2026 Xxincognit56xX

gurnr is free software: you can redistribute it and/or modify it under the terms of the [GNU General Public License, version 3](LICENSE). It comes with no warranty.

It includes code from electron-react-boilerplate (MIT) and yolov7-face (GPL-3.0). See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for their notices. The pretrained face weights are not included and are licensed for non-commercial research only.
