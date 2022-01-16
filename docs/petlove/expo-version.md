---
sidebar_position: 2
---

# PetLove (Expo)

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

<div style="page-break-after: always;"></div>
## File structure

```c
- App.tsx
- AuthContext.tsx
- ThemeContext.tsx
- __tests__/
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
