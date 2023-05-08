import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  FlexProps,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { MoviesT } from "../types";

interface Props extends FlexProps {
  data: MoviesT;
}

export const BigMovie: FC<Props> = ({ data, ...rest }) => {
  const { id, title, vote_average, poster_path, overview, release_date } = data;

  return (
    <>
      <Flex
        key={id}
        bg="gray.700"
        p={6}
        borderRadius="lg"
        boxShadow="md"
        {...rest}
      >
        <Box position="relative" as="span" display="inline-block">
          <Link href={`/${id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="48"
              cursor="pointer"
              _hover={{ opacity: 0.75, transition: "ease-in-out 150ms" }}
            />
          </Link>

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
                    ? "green.400"
                    : vote_average >= 5
                    ? "orange.400"
                    : "red.400"
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
            mt={{ base: 4, md: 8, lg: 24 }}
          >
            <Text>{new Date(release_date).toDateString()}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
