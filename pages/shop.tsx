import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Box, Container } from "@chakra-ui/react";

import Hero from "~/components/ui/hero/Hero";
import Nav from "~/components/ui/nav/NavBar";
import Messy from "~/components/products/galleries/Messy";
import Ordered from "~/components/products/galleries/Ordered";
import Gallery from "~/components/ui/slider/Gallery";
import { images } from "~/components/ui/slider/_data";

const Home: NextPage = () => {
  return (
    <>
      <Container maxW={"8xl"}>
        <Nav />
        <Hero />
        <Messy />
      </Container>
      <Box backgroundColor="black" paddingY={10} justifyContent="space-between">
        <Ordered maxW={"8xl"} />
      </Box>
      <Gallery images={images} />
    </>
  );
};

export default Home;
