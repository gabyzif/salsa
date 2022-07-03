import {
  ChakraProvider,
  Container,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import Fonts from "~/theme/fonts";
import theme from "~/theme/index";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
