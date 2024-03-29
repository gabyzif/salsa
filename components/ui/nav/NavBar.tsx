import {
  Box,
  BoxProps,
  Button,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import { Logo } from "./Logo";

const HamburgerIcon = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 80 62"
    width="2em"
    height="2em"
    fill="currentColor"
    {...props}
  >
    <path d="M80 0H0V6H80V0Z"></path>
    <path d="M80 28H0V34H80V28Z"></path>
  </svg>
);

const NavItem = (
  props: BoxProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
) => <Box as="a" href="#" fontSize="sm" {...props} />;

export const NavBar = () => {
  const nav = useDisclosure();
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <Box as="header" pb="20">
      <Box bg="bg-surface">
        <Flex align="center" justifyItems="center" height="10rem">
          <div style={{ margin: 20 }}>
            <Logo />
          </div>
          <HStack
            borderBottomWidth="2px"
            borderColor="black"
            pt="1.5rem"
            w="100%"
            height={"6rem"}
            textTransform="uppercase"
            justify="center"
            color="blue.900"
          >
            <HStack width="80%" justify="space-between">
              <Button as="a" variant="link" href="#" color="black">
                Shop
              </Button>
              <ButtonGroup variant="link" spacing={20}>
                <Button as="a" href="#" color="black">
                  Qué es Salsa?
                </Button>
                <Button as="a" href="#" color="black">
                  Contacto
                </Button>
              </ButtonGroup>
            </HStack>
          </HStack>
          <IconButton
            size="lg"
            variant="ghost"
            icon={<HamburgerIcon />}
            aria-label="Toggle menu"
            {...nav.getButtonProps()}
          />
        </Flex>
      </Box>
      {/* 
      <Flex
        ref={ref}
        justify="center"
        align="center"
        initial={false}
        hidden={!nav.isOpen}
        aria-label="Submenu"
        bg="bg-surface"
        height="16"
        borderBottomWidth="1px"
        position="absolute"
        width="full"
        top="4.5rem"
        zIndex={-1}
        as={motion.nav}
        variants={{
          open: { y: "0", transition: { ease: [0.75, 0, 0.25, 1] } },
          closed: { y: "-100%" },
        }}
        animate={nav.isOpen ? "open" : "closed"}
        onAnimationStart={() => {
          ref.current?.removeAttribute("hidden");
        }}
        onAnimationComplete={() => {
          if (!ref.current) return;
          ref.current.hidden = !nav.isOpen;
        }}
      >
        <HStack spacing="6">
          <NavItem>Career</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Careers</NavItem>
        </HStack>
      </Flex> */}
    </Box>
  );
};

export default NavBar;
