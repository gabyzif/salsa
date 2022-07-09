import { color, extendTheme } from "@chakra-ui/react";
import styles from "./styles";

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
    heading: `'Druk Wide', sans-serif`,
    body: `'Articulat CF', 'caca', sans-serif`,
  },
  fontSizes: {
    "5xl": "5rem",
    "1xl": "1.35rem",
    xxs: "0.5rem",
  },
  components: {
    Heading: {
      sizes: {
        "5xl": {
          fontSize: "5.5rem",
        },
      },
      baseStyle: {
        color: "black",
      },
    },
  },
};

export default extendTheme(overrides);
