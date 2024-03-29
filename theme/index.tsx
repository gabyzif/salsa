import { color, extendTheme, theme as baseTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const overrides = {
  styles: {
    global: {
      ".outlined-text": {
        "-webkit-text-stroke": "thin black",
        "-webkit-text-fill-color": "transparent",
      },
    },
  },
  fonts: {
    heading: `'Druk Wide', 'Druk Medium', sans-serif`,
    body: `'Articulat CF', sans-serif`,
    a: `'Articulat CF', sans-serif`,
  },
  fontSizes: {
    "5xl": "5rem",
    "1xl": "1.35rem",
    xxs: "0.5rem",
  },
  components: {
    Heading: {
      sizes: {
        "4xl": {
          fontWeight: 500,
        },
        "5xl": {
          fontSize: "5.5rem",
        },
      },
      baseStyle: {
        color: "black",
      },
    },
  },
  colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
};

export default extendTheme(overrides, { config });
