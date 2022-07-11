---
sidebar_position: 2
---

# Customization

Project UI template base on UI Kitten and Eva Design System

https://akveo.github.io/react-native-ui-kitten/docs/getting-started/what-is-ui-kitten#what-is-ui-kitten

## 1. Fonts

This how to add fonts to project you need to follow all these steps

https://fonts.google.com/

#### assets/fonts/

```c
  Montserrat-Regular.ttf
  Overpass-Bold.ttf
  ...
```

#### hooks/useCachedResources.ts

```c
  "Overpass-Bold": require("../assets/fonts/Overpass-Bold.ttf"),
  "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
  ...
```

then u need to import on file mapping

#### constants/theme/mapping.json

```c
  ...
  "text-font-family-Overpass-Regular": "Overpass-Regular",
  "text-font-family-Montserrat-Regular": "Montserrat-Regular",
  ...
```

## 2. Icons

#### assets/icons/index.ts

```c
  website: require("./ic_website.png"),
  leftArrow: require("./ic_left_arrow.png"),
  rightArrow: require("./ic_right_arrow.png"),
  ...
```

then add to pack icon or you can create your own pack

#### assets/AssetIconsPack.tsx

```c
  const AssetIconsPack: IconPack<ImageProps | SvgProps> = {
    name: "assets", - *name package icons*
    icons: {
      website: createIcon(Icons.website),
      leftArrow: createIcon(Icons.leftArrow),
      rightArrow: createIcon(Icons.rightArrow),
    },
   };

   export default AssetIconsPack;
  ...
```

final step you need add to IconRegistry on App.tsx

#### App.tsx

```c
  import AssetIconsPack from "assets/AssetIconsPack";

  <SafeAreaProvider>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <IconRegistry icons={[EvaIconsPack, AssetIconsPack]} />
      ...
    </ThemeContext.Provider>
  </SafeAreaProvider>
```

## 3. Colors

#### Add Colors

https://colors.eva.design/

- contants/theme/appTheme.json

```c

  "color-basic-100": "#FFFFFF",
  "color-basic-200": "#FAFAFA",
  "color-basic-300": "#F6F6F6",
  "color-basic-400": "#E0E0E0",
  "color-basic-500": "#F0F0F0",
  "color-basic-600": "#F5F7FA",
  "color-basic-700": "#1F2933",
  "color-basic-800": "#323F4B",
  ...
```

#### Theme Variables

- light.json

```c
  "background-basic-color-1": "$color-basic-700",
  "background-basic-color-2": "$color-basic-800",
  "background-basic-color-3": "$color-basic-700",
  "text-basic-color": "$color-basic-600",
  "text-placeholder-color": "$color-basic-1200",
  ...
```

- dark.json

```c
  "background-basic-color-1": "$color-basic-700",
  "background-basic-color-2": "$color-basic-800",
  "background-basic-color-3": "$color-basic-700",
  "text-basic-color": "$color-basic-600",
  "text-placeholder-color": "$color-basic-1200",
  ...
```

#### Setup DarkMode

```c
  import React from 'react';

  type AppTheme = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  };

  export default React.createContext<AppTheme>({
    theme: 'light',
    toggleTheme: () => {},
  });
```

- App.tsx

```c
  import ThemeContext from "./ThemeContext";

  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  React.useEffect(() => {
    AsyncStorage.getItem("theme").then((value) => {
      if (value === "light" || value === "dark") setTheme(value);
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    AsyncStorage.setItem("theme", nextTheme).then(() => {
      setTheme(nextTheme);
    });
  };

  <SafeAreaProvider>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      ...
    </ThemeContext.Provider>
  </SafeAreaProvider>
```

#### Use Theme

```c
  import { useTheme } from "@ui-kitten/components";

  const theme = useTheme();

  { backgroundColor: theme["color-basic-1300"] },
  { backgroundColor: theme["background-basic-color-2"] },

```

#### Switch Theme

- create file hooks/useAppTheme.ts

```c
  import React from 'react';

  import ThemeContext from '../ThemeContext';

  export default () => {
    const appTheme = React.useContext(ThemeContext);
    return appTheme;
  };
```

```c
  import useAppTheme from 'hooks/useAppTheme';

  const { theme, toggleTheme } = useAppTheme();

```

## 4. Components

Default components UI Kitten

https://raw.githubusercontent.com/eva-design/eva/master/packages/eva/mapping.json

Basic components config on file constants/theme/mapping.json

#### 1. Text

https://akveo.github.io/react-native-ui-kitten/docs/components/text/overview#text

We create our own text , for ease of use and use in different places

##### Add Category and Status

```c
- Add name category and status on MyTextProps

  category?:
      | "h6"
      | "title-1"
      | "title-2"
      ...

  status?:
      | EvaStatus
      | "placeholder"
      | "white"
      | "black"
      ...

- Config category and status on file constants/theme/mapping.json
- Color value on file appTheme.json,light.json or dark.json

  "strict": {
      "text-h6-font-size": 12,
      "text-h6-font-weight": "700",
      "text-h6-font-family": "$text-font-family-FPro-bold",
      "text-title-1-font-size": 32,
      "text-title-1-font-weight": "700",
      "text-title-1-font-family": "$text-font-family",
      "text-title-2-font-size": 28,
      "text-title-2-font-weight": "700",
      "text-title-2-font-family": "$text-font-family",
      ...
  },
  "components": {
    "Text": {
        "meta": {
          "variantGroups": {
            "category": {
              "h6": {
                "default": false
              },
              "title1": {
                "default": false
              },
              "title2": {
                "default": false
              },
              ...
            },
            "status": {
              "black": {
                "default": false
              },
              "white": {
                "default": false
              },
              "placeholder": {
                "default": false
              },
              ...
            }
          }
        },
        "appearances": {
          "default": {
            "mapping": {
              "color": "text-basic-color"
            },
            "variantGroups": {
              "category": {
                "h6": {
                  "fontSize": "text-h6-font-size",
                  "fontWeight": "text-h6-font-weight",
                  "fontFamily": "text-h6-font-family"
                },

                "title1": {
                  "fontSize": "text-title-1-font-size",
                  "fontWeight": "text-title-1-font-weight",
                  "fontFamily": "text-title-1-font-family"
                },
                "title2": {
                  "fontSize": "text-title-2-font-size",
                  "fontWeight": "text-title-2-font-weight",
                  "fontFamily": "text-title-2-font-family"
                },
                ...
              },
              "status": {
                "placeholder": {
                  "color": "text-placeholder-color"
                },
                "white": {
                  "color": "color-basic-100"
                },
                "black": {
                  "color": "color-basic-700"
                },
              }
            }
          },
        }
      },
  }

```

##### Use Text

```c
  import Text from "components/Text";

  <Text category="title2" status="placeholder">Metmoi</Text>
```

#### 2. Layout

- Layout is the most abstract component on top of which all other UI Kitten components are built. By default, it renders a `View` element

```c
  "Layout": {
        "meta": {
          "scope": "mobile",
          "parameters": {
            "backgroundColor": {
              "type": "string"
            }
          },
          "appearances": {
            "default": {
              "default": true
            }
          },
          "variantGroups": {
            "level": {
              "5": {
                "default": true
              },
              "6": {
                "default": false
              },
              "7": {
                "default": false
              },
              "8": {
                "default": false
              }
            }
          }
        },
        "appearances": {
          "default": {
            "variantGroups": {
              "level": {
                "5": {
                  "backgroundColor": "$background-basic-color-5"
                },
                "6": {
                  "backgroundColor": "$background-basic-color-6"
                },
                "7": {
                  "backgroundColor": "$background-basic-color-7"
                },
                "8": {
                  "backgroundColor": "$background-basic-color-8"
                }
              }
            }
          }
        }
      },

```

#### 2. Container

- Content is `Layout` with flex to 1 and use safe area insets. It renders a `View` element.

```c
  import Container from "components/Container";

  <Container>
    <Content>
      <Text>Metmoi</Text>
    </Content>
  </Container>
```

#### 3. Content

- Content is ScrollView with helpful style shorthand. It renders a `ScrollView` element.

```c
  import Content from "components/Content";

  <Content>
    <Text>Metmoi</Text>
  </Content>

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

```

```
