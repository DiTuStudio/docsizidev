---
sidebar_position: 3
---

# Doctor Plus - Patient (React Native)

## Environment confirmation

In React Native template application, please setup environment follow React Native environment setup guide first.

[https://docs.timistudio.dev/docs/environment-setup/react-native-environment-setup](/docs/environment-setup/react-native-environment-setup)

Then to confirm all setup is ok, please execute command below to verify.

```bash
$ yarn -v
1.22.17

$ node -v
v14.17.5

$ npm -v
6.14.14
```

If you are using MacOS and work with iOS, please check your XCode is latest version.

```bash
$ /usr/bin/xcodebuild -version
Xcode 13.2.1
Build version 13C100
```

## Run in development

```bash
cd <react-native-project-root>
yarn install
```

If you are using npm without yarn

```bash
cd <react-native-project-root>
npm install
```

Then, start Metro with command below

```bash
npx react-native start
```

Finally start simulator with command below

```bash
react-native run-android
```

If you develop with iOS application

```bash
react-native run-ios
```

## File structure

```c
- android/                                    # ReactNative default android files
- ios/                                        # ReactNative default iOS files
- src/components/                             # React Components
- src/configs/                                # React configs and constant files
- src/container/                              # Project screens
- src/hooks/                                  # React hooks
- src/images/                                 # Image asset files
- src/constants/                              # Project constant files
- src/navigation/                             # React Native Navigation
- src/redux/                                  # React Redux files
- src/style/                                  # Project global styles
- src/type/                                   # Project global types
- src/utils/                                  # Helper files
- App.tsx
- index.js
- babel.config.js                             # Babel config
- metro.config.js                             # Metro config
- package.json                                # Node packages
- tsconfig.json                               # Typescript config
```

## SUPPORT INFORMATION

Thank for your purchase, feel free to contact with us if you have any trouble when install application.

- Email: admin@timistudio.dev
- Facebook official fanpage: <https://www.facebook.com/timistudio.dev>