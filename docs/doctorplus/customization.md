---
sidebar_position: 2
---

# Customization

## 1. Colors

- src/configs/Colors.ts

Add or edit the colors you want

```c
const Colors = {
  white: '#FFFFFF',
  black: '#000000',
};

export default Colors;
```

## 1. Theme Variables

- src/configs/Theme.ts

This allows you to easily create themed components by using theme variables

```c
export interface ITheme {
  background: ColorValue | string;
  text: ColorValue | string;
}

export const themes = {
  dark: {
    background: Colors.black,
    text: Colors.white,
  },
  light: {
    background: Colors.white,
    text: Colors.black,
  },
};
```

### Declare Custom Component

Let's declare a View and set it backgroundColor to any color of current theme.

```c
import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'configs/Theme';

interface AwesomeViewProps {}

const AwesomeView = ({...rest}: AwesomeViewProps) => {
  const {theme} = useTheme();

  return <View {...rest} style={[{backgroundColor: theme.background}]} />;
};

export default AwesomeView;

```
