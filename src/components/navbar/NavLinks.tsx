import { FC } from "react";
import { chakra, Flex, FlexProps } from "@chakra-ui/react";
import Link from "react-scroll/modules/components/Link";
import { routes } from "@/util/routes";
import { IRoute } from "@/util/routes/IRoute";

const NavigationLink = chakra(Link);

export const NavLinks: FC<FlexProps> = (props) => {
  return (
    <Flex as="nav" alignItems="center" {...props}>
      {routes.map((routeGroup: IRoute) => {
        return (
          <NavigationLink
            activeClass="active"
            role="button"
            key={routeGroup.id}
            to={routeGroup.path}
            aria-label={`go to ${routeGroup.title}`}
            fontSize={{ md: "0.7rem", lg: "1rem" }}
            cursor="pointer"
            spy
            smooth
            py={6}
            offset={-30}
            duration={1000}
            position="relative"
            background="transparent"
            w="fit-content"
            _hover={{
              textDecor: "none",
              _after: { w: "70%" },
            }}
            _after={{
              content: `""`,
              position: "absolute",
              backgroundColor: "#861B27",
              width: "0",
              height: "3px",
              left: 3,
              bottom: 3,
              transition: "width 0.35s ease 0s",
            }}
          >
            {routeGroup.title}
          </NavigationLink>
        );
      })}
    </Flex>
  );
};
