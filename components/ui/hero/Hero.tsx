import React from "react";
import PropTypes from "prop-types";

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

const Hero = (props) => {
  return (
    <Grid
      h="100vh"
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
      </GridItem>
      <GridItem>
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

Hero.propTypes = {};

export default Hero;
