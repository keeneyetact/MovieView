import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  FlexProps,
  Image,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { MoviesT } from "../types";

interface Props extends FlexProps {
  data: MoviesT;
}

export const BigMovie: FC<Props> = ({ data, ...rest }) => {
  const { id, title, vote_average, poster_path, overview, release_date } = data;

  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/movies",
      query: { id },
    });
  };

  return (
    <>
      <Flex
        bg="gray.700"
        p={6}
        borderRadius="lg"
        boxShadow="md"
        alignItems="center"
        {...rest}
      >
        <Box position="relative" as="span" display="inline-block">
          <Box onClick={handleClick}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="48"
              height={{ md: "20rem", lg: "17rem" }}
              cursor="pointer"
              _hover={{ opacity: 0.75, transition: "ease-in-out 150ms" }}
            />
          </Box>

          {vote_average ? (
            <Box
              bg="gray.700"
              w="14"
              h="14"
              borderRadius="full"
              position="absolute"
              right={{ base: "-20px", md: "-20px" }}
              bottom={{ base: "-20px", md: "-14px" }}
            >
              <CircularProgress
                value={Math.round(vote_average * 10)}
                size="60px"
                thickness="5px"
                color={
                  vote_average >= 7.5
                    ? "green"
                    : vote_average >= 5
                    ? "orange"
                    : "red"
                }
              >
                <CircularProgressLabel
                  fontSize={{ base: "0.8rem", md: "0.9rem" }}
                  fontWeight="bold"
                >{`${Math.round(vote_average * 10)}%`}</CircularProgressLabel>
              </CircularProgress>
            </Box>
          ) : (
            ""
          )}
        </Box>
        <Flex
          py={2}
          gap={4}
          w={{ base: "10rem", md: "18rem", lg: "xl" }}
          textAlign="start"
          flexDir="column"
          ml={{ base: 4, lg: 8 }}
        >
          <Text
            fontWeight="semibold"
            fontSize={{ base: "0.9rem", md: "0.8rem", lg: "1rem" }}
            lineHeight="tight"
            transition="color ease-in duration-150"
            _hover={{ color: "gray.400" }}
            mt={8}
          >
            {title}
          </Text>
          <Text
            display={{ base: "none", md: "flex" }}
            fontWeight="semibold"
            fontSize={{ md: "0.8rem" }}
            color="gray.400"
          >
            {overview}
          </Text>
          <Flex
            justifyContent={{ base: "start", md: "flex-end" }}
            mt={{ base: 4, md: 4, lg: 24 }}
          >
            <Text>{new Date(release_date).toDateString()}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
