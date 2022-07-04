import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import {
  Heading,
  Box,
  Text,
  Container,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
const Home: NextPage = () => {
  return (
    <Grid
      h="200px"
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
          <Box>
            <Text>REMES</Text>
            <Text>POP</Text>
            <Text>ARGY</Text>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Home;
