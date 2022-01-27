---
sidebar_position: 3
---

# Healer (Expo)

## Environment confirmation

In Expo template application, please setup environment follow Expo environment setup guide first.

[https://docs.timistudio.dev/docs/environment-setup/expo-environment-setup](/docs/environment-setup/expo-environment-setup)

Then to confirm all setup is ok, please execute command below to verify.

```bash
$ yarn -v
1.22.17

$ node -v
v14.17.5

$ npm -v
6.14.14

$ expo --version
5.0.3
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

Finally start simulator with command below

```bash
yarn android
# or
yarn ios
```

If you are using npm without yarn

```bash
npm run android
# or
npm run ios
```

## File structure

```c
- assets/                                     # Project fonts,icon and splash screen
- app/actions/                                # React redux actions
- app/api/                                    # Project config api
- app/assets/                                 # Image asset files
- app/components/                             # React components
- app/config/                                 # React config
- app/data/                                   # React data
- app/elements/                               # React element
- app/fonts/                                  # React fonts
- app/img/                                    # Image asset files
- app/lib/                                    # React library
- app/navigation/                             # React native navigation
- app/reducers/                               # React redux reducers
- app/sagas/                                  # React redux sagas
- app/screens/                                # Project screens
- app/store/                                  # React redux store
- app/styles/                                 # Project styles
- app/utils/                                  # Helper files
- app.json                                    # App config
- App.js
- babel.config.js                             # Babel config
- package.json                                # Node packages
- tsconfig.json                               # Typescript config
```

## SUPPORT INFORMATION

Thank for your purchase, feel free to contact with us if you have any trouble when install application.

- Email: admin@timistudio.dev
- Facebook official fanpage: <https://www.facebook.com/timistudio.dev>
