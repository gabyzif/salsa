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
      templateColumns="1fr 2fr"
      gap={4}
    >
      <GridItem>
        <Flex direction="column" align="flex-end">
          <Heading as="h1" size="5xl" textTransform="uppercase" lineHeight={1}>
            Salsa
          </Heading>
          <Heading
            as="h2"
            lineHeight={1}
            size="5xl"
            textTransform="uppercase"
            className="outlined-text"
          >
            Arg
          </Heading>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex gap={3}>
          <Box>
            <Heading
              as="p"
              size="lg"
              textTransform="uppercase"
              className="outlined-text"
            >
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
            position="absolute"
            top="30%"
            css={{ mixBlendMode: "multiply" }}
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

Hero.propTypes = {};

export default Hero;
