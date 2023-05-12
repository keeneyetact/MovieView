import { FC } from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { MoviesT } from "../types";
import { useRouter } from "next/router";

interface Props {
  data: MoviesT;
}

export const Movie: FC<Props> = ({ data }) => {
  const { id, title, poster_path, vote_average } = data;

  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/movies",
      query: { id },
    });
  };

  return (
    <SlideFade
      in
      offsetX="100%"
      transition={{
        enter: {
          transform: "translateX(0)",
          opacity: 1,
          config: { duration: 500 },
        },
        exit: {
          transform: "translateX(-100%)",
          opacity: 0,
          config: { duration: 500 },
        },
      }}
    >
      <Flex
        onClick={handleClick}
        flexDirection="column"
        cursor="pointer"
        roundedTop="md"
        backgroundColor="gray.700"
        h={{ base: "fit-content", md: "27rem" }}
      >
        <Box as="span" position="relative" display="inline-block" w="14rem">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            roundedTop="md"
            w="14rem"
            h={{ base: "18rem", md: "fit-content" }}
            boxShadow="xl"
            transition="ease-in-out duration-150"
            _hover={{ opacity: 0.75 }}
          />

          {vote_average ? (
            <Box
              position="absolute"
              w="14"
              h="14"
              bg="gray.800"
              rounded="full"
              bottom="-28px"
              left="50%"
              transform="translateX(-50%)"
            >
              <CircularProgress
                value={Math.round(vote_average * 10)}
                size="100%"
                color={
                  vote_average >= 7.5
                    ? "green"
                    : vote_average >= 5
                    ? "orange"
                    : "red"
                }
              >
                <CircularProgressLabel
                  fontSize={{ base: "", md: "0.9rem" }}
                  fontWeight="bold"
                >{`${Math.round(vote_average * 10)}%`}</CircularProgressLabel>
              </CircularProgress>
            </Box>
          ) : (
            ""
          )}
        </Box>

        <Box as="div" py={2} w="14rem" textAlign="center">
          <Text
            display="block"
            fontWeight="semibold"
            fontSize={{ base: "", md: "0.8rem" }}
            lineHeight="tight"
            transition="color ease-in duration-150"
            _hover={{ color: "gray.400" }}
            mt={8}
          >
            {title}
          </Text>
        </Box>
      </Flex>
    </SlideFade>
  );
};
