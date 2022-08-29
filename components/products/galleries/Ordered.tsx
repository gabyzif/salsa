import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { ProductCard } from "./cards/product/ProductCard";
import { products } from "./_data";
import Footer from "./ui/Footer";

interface orderedProps {
  maxW: string;
}
const Ordered = ({ maxW }: orderedProps) => (
  <VStack
    mx="auto"
    maxW={maxW}
    paddingY={20}
    spacing={20}
    direction="column"
    alignItems="flex-start"
  >
    <Box>
      <HStack marginBottom={10} spacing={20}>
        <Heading
          as="h2"
          size="3xl"
          color="white"
          textTransform="uppercase"
          lineHeight={1}
        >
          /
        </Heading>
        <Heading
          as="h2"
          size="3xl"
          color="white"
          textTransform="uppercase"
          lineHeight={1}
        >
          NUESTRAS SALSAS
        </Heading>
      </HStack>
      <Box width="40%" marginLeft={10}>
        <Text fontSize="xl" color="white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          dicta praesentium?
        </Text>
      </Box>
    </Box>

    <SimpleGrid
      width={"100%"}
      columns={{ base: 1, sm: 2, md: 3 }}
      gap={{ base: "8", lg: "20" }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
    <Box width="100%">
      <Footer color="white" text="Más salsas" />
    </Box>
  </VStack>
);

export default Ordered;
