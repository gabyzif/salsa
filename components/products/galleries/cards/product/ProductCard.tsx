import {
  AspectRatio,
  Box,
  HStack,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTags";
import * as React from "react";
import { Product } from "../../_data";

interface Props {
  product: Product;
}

export const ProductCard = (props: Props) => {
  const { product } = props;
  return (
    <Stack
      spacing={{ base: "3", md: "5" }}
      borderWidth={1}
      borderColor="white"
      alignItems="center"
      padding={4}
    >
      <AspectRatio ratio={4 / 5} width={"70%"}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          draggable="false"
          fallback={<Skeleton />}
        />
      </AspectRatio>
      <Stack color="white" alignItems="center">
        <Text fontSize="sm">{product.blue}</Text>
        <Text fontWeight="medium">{product.name}</Text>
        <PriceTag
          currency={product.currency}
          price={product.price}
          priceProps={{ color: "white" }}
          salePrice={product.salePrice}
          salePriceProps={{
            color: useColorModeValue("red.500", "red.400"),
            fontWeight: "bold",
          }}
        />
      </Stack>
    </Stack>
  );
};
