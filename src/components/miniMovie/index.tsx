import { Box, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { MoviesT } from "../types";

interface Props extends FlexProps {
  data: MoviesT;
}

export const MiniMovie: FC<Props> = ({ data, ...rest }) => {
  const { id, release_date, title, poster_path } = data;
  const date = new Date(release_date).toDateString();

  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/movies",
      query: { id },
    });
  };

  return (
    <Flex
      align="start"
      w={{ base: "23rem", md: "12rem", lg: "23rem" }}
      {...rest}
    >
      <Box onClick={handleClick} cursor="pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          w="4rem"
          _hover={{ opacity: 0.75 }}
          transition="ease-in-out 150ms"
        />
      </Box>
      <Flex ml={4} flexDir="column" justifyContent="space-between">
        <Flex w={{ base: "16rem", md: "5rem", lg: "12rem" }}>{title}</Flex>
        <Text color="gray.400" fontSize="sm" mt={1}>
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};
