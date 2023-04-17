---
sidebar_position: 2
---

# Stacy (Flutter)

## Environment confirmation

In Flutter application, please setup environment follow Flutter environment setup guide first.

[https://docs.izidev.dev/docs/environment-setup/flutter-environment-setup](/docs/environment-setup/flutter-environment-setup)

Then to confirm all setup is ok, please execute command below to verify.

```bash
$ flutter --version
Flutter 3.7.3 • channel stable • https://github.com/flutter/flutter.git
Framework • revision 9944297138 (10 weeks ago) • 2023-02-08 15:46:04 -0800
Engine • revision 248290d6d5
Tools • Dart 2.19.2 • DevTools 2.20.1
```

If you are using MacOS and work with iOS, please check your XCode is latest version.

```bash
$ /usr/bin/xcodebuild -version
Xcode 14.2
Build version 14C18
```

## Run in development

```bash
cd <flutter-project-root>
flutter pub get
```

Then list, launch and create emulators.

```bash
flutter emulators
```

Start simulator with command below

```bash
flutter emulators --launch <emulator id>
```

Finally run project

```bash
flutter run
```

## File structure

```c
- android/                                    # Flutter default android files
- ios/                                        # Flutter default iOS files
- assets/                                     # Image asset files
- fonts/                                      # Fonts family in app
- lib/                                        # Contains code program
- test/                                       # Contains code test
- pubspec.yaml                                # flutter packages
```

## SUPPORT INFORMATION

Thank for your purchase, feel free to contact with us if you have any trouble when install application.

- Email: izidev2023@gmail.com
- Facebook official fanpage: <https://www.facebook.com/timistudio.dev>

### OUR PRODUCTS:

- Taearn Make Money App Flutter Template: https://codecanyon.net/item/taearn-make-money-flutter-app/44937626

Thank you!
