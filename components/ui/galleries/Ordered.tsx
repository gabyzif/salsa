import { Box, SimpleGrid, Flex, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import { ProductCard } from "./cards/product/ProductCard";
import { products } from "./_data";
import Footer from "./ui/Footer";

const Ordered = ({ maxW }) => (
  <Box mx="auto" maxW={maxW}>
    <Flex marginBottom={10}>
      <Heading
        as="h2"
        size="4xl"
        color="white"
        textTransform="uppercase"
        lineHeight={1}
      >
        /
      </Heading>
      <Heading
        as="h2"
        size="4xl"
        color="white"
        textTransform="uppercase"
        lineHeight={1}
      >
        NUESTRAS SALSAS
      </Heading>
    </Flex>
    <Box width="50%" marginY={5}>
      <Text fontSize="xl" color="white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dicta praesentium?
      </Text>
    </Box>

    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }}
      gap={{ base: "8", lg: "20" }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>

    <Flex>
      <Footer color="white" />
    </Flex>
  </Box>
);

export default Ordered;
