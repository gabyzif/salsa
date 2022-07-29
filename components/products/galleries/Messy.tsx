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
import Footer from "./ui/Footer";

const Messy = () => (
  <Grid
    gap={4}
    gridTemplateColumns={`1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr`}
    gridTemplateAreas={` "line title title title title title title . . . ."
    ". subtitle subtitle subtitle subtitle subtitle . big big big big"
    ". small-1 small-1 small-1 . . . big big big big"
    ". small-1 small-1 small-1 . . . big big big big"
    ". small-1 small-1 small-1 . . . big big big big"
    ". small-1 small-1 small-1 small-2 small-2 small-2 small-3 small-3 small-3 ."
    ". . . . small-2 small-2 small-2 small-3 small-3 small-3 ."
    ". . . . small-2 small-2 small-2 small-3 small-3 small-3 ."
    ". . . . small-2 small-2 small-2 small-3 small-3 small-3 ."
    ". . . . . . . big-2 big-2 big-2 big-2"
    ". . . . . . . big-2 big-2 big-2 big-2"
    ". . . . . . . big-2 big-2 big-2 big-2"
    "footer footer footer footer footer footer footer big-2 big-2 big-2 big-2"
    "footer footer footer footer footer footer footer . . . ." 
`}
  >
    <GridItem area="line">
      <Heading as="h2" size="4xl" textTransform="uppercase" lineHeight={1}>
        /
      </Heading>
    </GridItem>
    <GridItem area="title">
      <Heading as="h2" size="4xl" textTransform="uppercase" lineHeight={1}>
        NEW Sauce
      </Heading>
    </GridItem>
    <GridItem area="subtitle">
      <Text fontSize="3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dicta praesentium?
      </Text>
    </GridItem>
    <GridItem area="small-1">
      <Box backgroundColor="gray.200" padding={6}>
        <Image
          alt="imagen"
          boxSize="auto"
          objectFit="cover"
          src="./images/diego.png"
          marginLeft="auto"
        />
      </Box>
    </GridItem>
    <GridItem area="big">
      <Box backgroundColor="gray.200" padding={6}>
        <Image
          alt="imagen"
          boxSize="auto"
          objectFit="cover"
          src="./images/diego.png"
          marginLeft="auto"
        />
      </Box>
    </GridItem>
    <GridItem area="small-2">
      <Box backgroundColor="gray.200" padding={6}>
        <Image
          alt="imagen"
          boxSize="auto"
          objectFit="cover"
          src="./images/diego.png"
          marginLeft="auto"
        />
      </Box>
    </GridItem>
    <GridItem area="small-3">
      <Box backgroundColor="gray.200" padding={6}>
        <Image
          alt="imagen"
          boxSize="auto"
          objectFit="cover"
          src="./images/diego.png"
          marginLeft="auto"
        />
      </Box>
    </GridItem>
    <GridItem area="big-2">
      <Box backgroundColor="gray.200" padding={6}>
        <Image
          alt="imagen"
          boxSize="auto"
          objectFit="cover"
          src="./images/diego.png"
          marginLeft="auto"
        />
      </Box>
    </GridItem>
    <GridItem area="footer">
      <Footer color="black" />
    </GridItem>
  </Grid>
);

export default Messy;
