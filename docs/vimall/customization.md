---
sidebar_position: 2
---

# Customization

## 1. Colors

- src/theme/index.ts

Add or edit the colors you want

```c
 colors: {
      ...theme,
      primary: "#4220CE",
      "carolina-blue": "#1DA1F2",
      "cyber-yellow": "#FFF279",
      "golden-sand": "#F0DF67",
      "radical-red": "#FA4169",
      "patrick-blue": "#215191",
      "light-salmon": "#4B9BAE",
      "go-green": "#0EAD69",
      "y-in-mn-blue": "#3E517A",
      "sematic-orange": "#FE9870",
      basic: {
        100: "#FFFFFF",
        200: "#F7F8F9",
        300: "#F5F7FA",
        400: "#E4E7EB",
        500: "#CBD2D9",
        600: "#A6B0BA",
        700: "#7B8794",
        800: "#616E7C",
        900: "#52606D",
        1000: "#3E4C59",
        1100: "#323F4B",
        1200: "#1F2933",
        1300: "#192129",
        1400: "#101419",
      },
    },
```

## 2. Theme Variables

This allows you to easily create themed components by using theme variables

- src/theme/index.ts

```c
  semanticTokens: {
      colors: {
        error: "red.500",
        "text-title": {
          default: "black",
          _dark: "white",
        },
        "bg-main": {
          default: "white",
          _dark: "gray.900",
        },
      },
    },
```

or you can use hooks

- src/hooks/useColor.ts

```c
  const text1 = useColorModeValue("basic.1200", "white");     //#1F2933 - #FFFFFF
  const text2 = useColorModeValue("basic.500", "basic.900");  // #CBD2D9 - #52606D
```

### Declare Custom Component

Let's declare a View and set it backgroundColor to any color of current theme.

- src/theme/components/Button.ts

#### 1.Button

```c
const Button = {
  baseStyle: {},
  sizes: {
    lg: {
      lineHeight: "100%",
      alignItems: "flex-end",
      fontSize: "16px",
      py: "13px",
    },
  },
  variants: {
    solid: (props: any) => ({
      bg: "primary",
      color: props.colorMode === "dark" ? "basic.100" : "basic.200",
      _hover: {
        bg: props.colorMode === "dark" ? "basic.1100" : "basic.400",
        color: props.colorMode === "dark" ? "basic.500" : "basic.900",
        _disabled: {
          bg: "basic.400",
          color: "#1F293330",
        },
      },
      _active: {
        bg: "y-in-mn-blue",
        color: "basic.100",
        border: "none",
      },
      _disabled: {
        bg: "basic.400",
        color: "#1F293330",
        opacity: 1,
      },
      rounded: "full",
    }),
  },
  defaultProps: {},
};

export { Button };
```

### OUR PRODUCTS:

- Fairpay – Split Bill React Native: https://1.envato.market/Kez64a
- Monsy Money Manager Full Application: https://1.envato.market/do9d3k
- Runner Flutter Full Application: https://1.envato.market/qnAOaq
- Triplan Flutter Template: https://1.envato.market/doyJdK
- Stacy Roommate Flutter Template: https://1.envato.market/YgR1Xj
- Fitness Love: https://1.envato.market/x9kDjx
- Doctor Plus – Patient React Native: https://1.envato.market/x99yJR
- Doctor Plus – Doctor React Native: https://1.envato.market/x07Bk
- Carer – Patient React Native App Template: https://1.envato.market/RzAzy
- Wala – Food React Native: http://1.envato.market/qbXgy
- Evez React Native: https://1.envato.market/emE1r
- Finany – Cashflow Manager App: https://1.envato.market/d1v17
- Imba React Native: https://1.envato.market/M3KWM
- Healer React Native: https://1.envato.market/v6BDd
- Healer Flutter: https://1.envato.market/b1xk9
- Finey React Rative: https://1.envato.market/dJQyM
- Finey Flutter: https://1.envato.market/RdB09
- Kid Draw React Native: https://1.envato.market/Z3nQk

Thank you!
