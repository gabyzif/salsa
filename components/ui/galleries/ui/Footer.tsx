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
} from "@chakra-ui/react";
import Arrow from "~/components/svg/Arrow";

interface Color {
  color: string;
}

const Footer = ({ color }: Color) => {
  return (
    <Flex
      borderBottomWidth="3px"
      borderColor={color || "black"}
      padding={4}
      margin={2}
      justifyItems="space-between"
    >
      <Text fontSize="3xl" fontWeight="bold" lineHeight="1" color={color}>
        CHECK OUT ALL THE T-SHIRTS
      </Text>
      <Flex>
        <Arrow color={color || "black"} />
        <Arrow color={color || "black"} />
      </Flex>
    </Flex>
  );
};

Footer.propTypes = {
  color: PropTypes.string,
};

export default Footer;
