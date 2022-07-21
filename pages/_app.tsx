import {
  ChakraProvider,
  Container,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import Fonts from "~/theme/fonts";
import theme from "~/theme/index";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
