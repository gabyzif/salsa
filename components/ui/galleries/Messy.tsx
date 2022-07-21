import {
  Container,
  Stack,
  Text,
  Grid,
  GridItem,
  Heading,
  Image,
  useColorModeValue as mode,
} from "@chakra-ui/react";

const Messy = () => (
  <Grid
    templateAreas={`"header header ."
                  "subtitle subtitle ."
                   ". . big"
                  "small . ."
                  ". small1 small2"`}
    // gridTemplateRows={"2fr 2fr 30px"}
    gridTemplateColumns={`"2fr 2fr 3fr"`}
    gap={6}
  >
    <GridItem w="100%" area={"header"}>
      <Heading as="h2" size="4xl" textTransform="uppercase" lineHeight={1}>
        / NEW Sauce
      </Heading>
    </GridItem>
    <GridItem w="100%" h="40" area={"subtitle"}>
      <Text fontSize="3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dicta praesentium?
      </Text>
    </GridItem>
    <GridItem w="100%" h="72" area={"big"}>
      <Image
        alt="imagen"
        boxSize="auto"
        objectFit="cover"
        src="./images/diego.png"
        marginLeft="auto"
      />
    </GridItem>
    <GridItem h="72" area={"small"}>
      <Image
        alt="imagen"
        boxSize="auto"
        objectFit="cover"
        src="./images/diego.png"
        marginLeft="auto"
      />
    </GridItem>
    <GridItem w="100%" h="40" area={"small1"} marginTop="-100px">
      <Image
        alt="imagen"
        boxSize="auto"
        objectFit="cover"
        src="./images/diego.png"
        marginLeft="auto"
      />
    </GridItem>
    <GridItem w="100%" h="40" area={"small2"} marginTop="-100px">
      <Image
        alt="imagen"
        objectFit="cover"
        src="./images/diego.png"
        marginLeft="auto"
      />
    </GridItem>
  </Grid>
);

export default Messy;
