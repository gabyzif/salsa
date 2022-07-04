import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";

const overrides = {
  styles: {
    global: {
      ".outlined-text": {
        "-webkit-text-stroke": "1px black",
        "-webkit-text-fill-color": "transparent",
      },
    },
  },
  fonts: {
    heading: `'Druk Wide', sans-serif`,
    body: `'Articulat CF', sans-serif`,
  },
};

export default extendTheme(overrides);
