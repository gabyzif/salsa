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
    body: `'Articulat CF', sans-serif`,
  },
  fontSizes: {
    "5xl": "5rem",
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
