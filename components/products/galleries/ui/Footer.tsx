import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  Grid,
  GridItem,
  Heading,
  Image,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import Arrow from "~/components/svg/Arrow";

interface Footer {
  color: string;
  text?: string;
}

const Footer = ({ color, text }: Footer) => {
  return (
    <Flex
      borderBottomWidth="2px"
      borderColor={color || "black"}
      padding={4}
      margin={2}
      justifyContent="space-between"
    >
      <Text
        fontSize="2xl"
        fontWeight="semibold"
        textTransform="uppercase"
        lineHeight="1"
        color={color}
      >
        {text || "CHECK OUT ALL THE T-SHIRTS"}
      </Text>
      <HStack spacing={4}>
        <Arrow color={color || "black"} />
        <Arrow color={color || "black"} />
      </HStack>
    </Flex>
  );
};

Footer.propTypes = {
  color: PropTypes.string,
};

export default Footer;
