import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  Heading,
  Box,
  Text,
  Container,
  Grid,
  GridItem,
  Flex,
  Stack,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";

import Hero from "~/components/ui/hero/Hero";
import Nav from "~/components/ui/nav/NavBar";
import Messy from "~/components/products/galleries/Messy";
import Ordered from "~/components/products/galleries/Ordered";
import Gallery from "~/components/ui/slider/Gallery";
import { images } from "~/components/ui/slider/_data";
import Client from "shopify-buy";

export const shopifyClient = Client.buildClient({
  storefrontAccessToken: process.env.ACCESS_TOKEN,
  domain: process.env.STORE_DOMAIN,
});

console.log(shopifyClient, "shopifyClient");

export const parseShopifyResponse = (response) =>
  JSON.parse(JSON.stringify(response));

const Home: NextPage = () => {
  return (
    <>
      <Container maxW={"8xl"}>
        <Nav />
        <Hero />
        <Messy />
      </Container>
      <Box backgroundColor="black" paddingY={10} justifyContent="space-between">
        <Ordered maxW={"80%"} />
      </Box>
      {/* <Gallery images={images} /> */}
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  // Fetch all the products
  try {
    const products = await shopifyClient.product.fetchAll();
    console.log(products);
    return {
      props: {
        products: parseShopifyResponse(products),
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};
