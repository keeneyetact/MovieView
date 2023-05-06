import { Heading, Stack, Text, Link } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <Stack
      align="center"
      as="section"
      h="screen-h"
      justify="center"
      p={4}
      textAlign="center"
      mt={{ base: "3rem", md: "7.5rem" }}
    >
      <Heading>Error 404</Heading>
      <Text>
        The current page is not available.{" "}
        <Link color="#861B27" href="/">
          Head over to home page.
        </Link>
      </Text>
    </Stack>
  );
}
