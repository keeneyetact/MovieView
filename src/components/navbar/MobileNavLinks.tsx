import { FC } from "react";
import { chakra, Flex, FlexProps, Heading } from "@chakra-ui/react";
import Link from "react-scroll/modules/components/Link";
import { routes } from "@/util/routes";
import { IRoute } from "@/util/routes/IRoute";

interface NavLinksProps extends FlexProps {
  onClose: () => void;
}

const NavigationLink = chakra(Link);

export const MobileNavLinks: FC<NavLinksProps> = ({ onClose, ...rest }) => {
  return (
    <Flex as="nav" alignItems="center" {...rest}>
      {routes.map((routeGroup: IRoute) => {
        return (
          <Flex
            key={routeGroup.title}
            flexDirection="column"
            alignItems="flex-end"
            mb={10}
          >
            <Heading fontSize="2xl" mb={4} fontWeight="400" color="neutral.400">
              <NavigationLink
                activeClass="active"
                role="button"
                to={routeGroup.path}
                aria-label={`go to ${routeGroup.title}`}
                cursor="pointer"
                spy
                smooth
                py={6}
                offset={-30}
                duration={1000}
                _active={{ bg: "transparent" }}
                color="#fff"
                _hover={{ color: "#861B27" }}
                fontSize="button"
                onClick={onClose}
              >
                {routeGroup.title}
              </NavigationLink>
            </Heading>
          </Flex>
        );
      })}
    </Flex>
  );
};
