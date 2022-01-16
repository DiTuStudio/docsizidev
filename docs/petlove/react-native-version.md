---
sidebar_position: 2
---

# PetLove (React Native)

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
- App.tsx
- AuthContext.tsx
- ThemeContext.tsx
- __tests__/
- android/                                    # ReactNative default android files
- app.json
- assets/                                     # Image asset files
- babel.config.js
- components/                                 # React Components
- constants                                   # Project constant files
- declarations.d.ts                           # SVG declre
- highcharts-react-native.ts                  # Highcharts declare
- hooks/                                      # React hooks
- i18n/                                       # Internationalization files
- index.js
- ios/                                        # ReactNative default iOS files
- metro.config.js                             # Metro config
- navigation/                                 # React Native Navigations
- package.json                                # Node packages
- react-native-web-refresh-control.d.ts
- react-native.config.js
- screens/                                    # Project screens
- styles/                                     # Project styles
- tsconfig.json                               # Typescript config
- utils/                                      # Helper files
```

## SUPPORT INFORMATION

Thank for your purchase, feel free to contact with us if you have any trouble when install application.

- Email: admin@timistudio.dev
- Facebook official fanpage: <https://www.facebook.com/timistudio.dev>
