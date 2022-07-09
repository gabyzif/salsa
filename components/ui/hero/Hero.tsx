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
    <Grid h="100vh" templateColumns="1fr 2fr">
      <GridItem>
        <Flex
          direction="column"
          align="flex-end"
          h={250}
          justifyContent="flex-end"
        >
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
        <Flex gap={3} w="80%" marginLeft="auto">
          <Box w="30%">
            <Heading
              as="p"
              size="md"
              letterSpacing={3}
              textTransform="uppercase"
              className="outlined-text"
            >
              Salsa
            </Heading>
            <Text textTransform="uppercase" fontSize="xxs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dicta praesentium?
            </Text>
          </Box>
          <Box w="30%">
            <Text textTransform="uppercase" fontSize="xxs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dicta praesentium?
            </Text>
          </Box>
          <Box
            textTransform="uppercase"
            fontWeight={500}
            fontSize="1xl"
            lineHeight={1}
            marginLeft="auto"
            borderLeft="2px solid black"
            css={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <Text>Remes</Text>
            <Text>Pop</Text>
            <Text lineHeight={1.5}>Argentina</Text>
          </Box>
        </Flex>
      </GridItem>
      <GridItem alignSelf="center">
        <Box>
          <Text
            fontSize="5xl"
            as="p"
            fontWeight={900}
            css={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            #10
          </Text>
        </Box>
      </GridItem>
      <GridItem>
        <Box position="relative" bottom="131.5px">
          <Image
            alt="imagen"
            w="90%"
            src="./images/diego.png"
            marginLeft="auto"
          />
          <Box
            width="120%"
            height={350}
            left="-3%"
            bg="#FF0000"
            position="absolute"
            top="25%"
            css={{ mixBlendMode: "multiply" }}
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

Hero.propTypes = {};

export default Hero;
