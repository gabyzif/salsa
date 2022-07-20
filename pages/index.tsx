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

const Home: NextPage = () => {
  return (
    <Container maxW={"8xl"}>
      <Nav />
      <Hero />
    </Container>
  );
};

export default Home;
