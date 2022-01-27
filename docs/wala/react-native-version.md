---
sidebar_position: 2
---

# Wala (React Native)

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
- app/actions/                                # React redux actions
- app/assets/                                 # Image asset files
- app/components/                             # React components
- app/config/                                 # React config
- app/help/                                   # Helper files
- app/hooks/                                  # React hooks
- app/lib/                                    # React library
- app/models/                                 # React config redux
- app/navigation/                             # React native navigation
- app/reducers/                               # React redux reducers
- app/sagas/                                  # React redux sagas
- app/screens/                                # Project screens
- app/services/                               # Project services
- app/store/                                  # React redux store
- app/svgs/                                   # Svg files
- app/ultis/                                  # Helper files
- app/utils/                                  # Helper files
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
