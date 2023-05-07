import { FC } from "react";
import { Box, BoxProps, Button } from "@chakra-ui/react";
import { Hamburger } from "../_icons/Hamburger";

interface MobileToggleProps extends BoxProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export const MobileToggle: FC<MobileToggleProps> = ({
  isOpen,
  onClick,
  ...rest
}) => {
  return (
    <Box
      background="#861B27"
      as={Button}
      display={{ base: "block", md: "none" }}
      onClick={onClick}
      _hover={{ bg: "#fff" }}
      {...rest}
    >
      <Hamburger />
    </Box>
  );
};
