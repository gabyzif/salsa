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
const Home: NextPage = () => {
  return (
    <Grid
      h="200px"
      width="80%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem>
        <Box>
          <Heading as="h1" size="4xl" textTransform="uppercase">
            Salsa
          </Heading>
          <Heading
            as="h1"
            size="4xl"
            textTransform="uppercase"
            className="outlined-text"
          >
            Arg
          </Heading>
        </Box>
        <Box>
          <Text
            fontSize="6xl"
            as="p"
            fontWeight="900"
            css={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            #10
          </Text>
        </Box>
      </GridItem>
      <GridItem>
        <Flex>
          <Box>
            <Heading as="p" textTransform="uppercase" className="outlined-text">
              Salsa
            </Heading>
            <Text textTransform="uppercase" fontSize="xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dicta praesentium?
            </Text>
          </Box>
          <Box>
            <Text textTransform="uppercase" fontSize="xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dicta praesentium?
            </Text>
          </Box>
          <Box
            textTransform="uppercase"
            fontWeight={700}
            fontSize="xl"
            css={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <Text fontSize="lg">Remes</Text>
            <Text>Pop</Text>
            <Text>Argy</Text>
          </Box>
        </Flex>
        <Box position="relative">
          <Image alt="imagen" src="./images/diego.png" />
          <Box
            width="120%"
            height={200}
            bg="#FF0000"
            opacity={0.9}
            position="absolute"
            top="30%"
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;
