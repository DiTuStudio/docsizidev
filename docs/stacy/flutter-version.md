---
sidebar_position: 2
---

# Stacy (Flutter)

## Environment confirmation

In Flutter application, please setup environment follow Flutter environment setup guide first.

[https://docs.timistudio.dev/docs/environment-setup/flutter-environment-setup](/docs/environment-setup/flutter-environment-setup)

Then to confirm all setup is ok, please execute command below to verify.

```bash
$ flutter --version
Flutter 2.8.1 • channel stable • https://github.com/flutter/flutter.git
Framework • revision 77d935af4d (8 weeks ago) • 2021-12-16 08:37:33 -0800
Engine • revision 890a5fca2e
Tools • Dart 2.15.1
```

If you are using MacOS and work with iOS, please check your XCode is latest version.

```bash
$ /usr/bin/xcodebuild -version
Xcode 13.2.1
Build version 13C100
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

- Email: admin@timistudio.dev
- Facebook official fanpage: <https://www.facebook.com/timistudio.dev>
