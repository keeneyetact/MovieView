import { ContainerProps, Flex, Link, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { Logo } from "../logo";
import Search from "../search";
import { MobileDrawer } from "./MobileDrawer";
import { MobileToggle } from "./MobileToggle";
import { NavLinks } from "./NavLinks";

interface Props extends ContainerProps {
  isShrunk: boolean;
}

export const Navbar: FC<Props> = ({ isShrunk, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      py={{ base: 3, md: 2 }}
      zIndex="sticky"
      left="0"
      position="fixed"
      top="0"
      w="100%"
      justify="center"
      borderTop="3px solid #861B27"
      backgroundColor="#000"
      color="#FFF"
      _before={{
        content: "''",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backdropFilter: isShrunk ? "blur(8px)" : "",
      }}
      transition="all 200ms ease-in-out"
      {...rest}
    >
      <Flex
        justify="space-between"
        alignItems="center"
        maxW="container.xl"
        w={{ base: "100%", md: "90%", lg: "100%" }}
        px={{ base: 6, md: 4, lg: 24 }}
        zIndex={1}
      >
        <Link aria-label="Logo" href="/">
          <Logo w={32} h={14} />
        </Link>

        <NavLinks
          marginInlineEnd={{ md: "1rem" }}
          display={{ base: "none", md: "flex", lg: "flex" }}
          height="2.5rem"
          gap={{ base: "1.2rem", md: "2rem", lg: "4rem" }}
        />

        <Search />

        <MobileToggle
          isOpen={isOpen}
          onClick={onOpen}
          marginInlineStart={{ base: "1rem" }}
          mr={-4}
        />

        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Flex>
  );
};
