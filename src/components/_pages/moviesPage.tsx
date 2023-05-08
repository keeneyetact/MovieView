import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  ContainerProps,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { SectionContainer } from "../layout/SectionContainer";
import { MovieCert } from "../movieCert";
import { moviebyID, socials } from "../types";
import { BiWorld } from "react-icons/bi";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

interface Props extends ContainerProps {
  data: moviebyID;
  socials: socials;
}

const MoviePage: FC<Props> = ({ data, socials, ...rest }) => {
  const {
    backdrop_path,
    title,
    release_date,
    runtime,
    id,
    poster_path,
    vote_average,
    homepage,
    overview,
  } = data;

  const { facebook_id, instagram_id, twitter_id } = socials;

  const toHoursAndMinutes = (totalMinutes: number) => {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
  };

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <SectionContainer mt={{ base: "5.5rem", md: "0" }} {...rest}>
      <Box
        bgImg={`url(https://image.tmdb.org/t/p/original${backdrop_path})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        brightness="-50%"
        filter="auto"
        w={{ md: "container.sm", lg: "container.lg" }}
        mx="auto"
        py={{ base: "2rem", md: "1rem" }}
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          textAlign="start"
          gap={4}
          px="2rem"
          opacity={1.63}
        >
          <Box>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              border="1px solid"
              width="48"
              rounded="md"
              height={{ md: "20rem", lg: "17rem" }}
              _hover={{ transition: "ease-in-out 150ms" }}
            />
          </Box>

          <Heading fontSize={{ base: "2rem", md: "1.5rem", lg: "2rem" }}>
            {title}
          </Heading>

          <Flex alignItems="center">
            <MovieCert id={id} />
            <Text px="2">&bull;</Text>
            <Text fontWeight="bold">
              {new Date(release_date).toDateString()}
            </Text>
            <Text px="2">&bull;</Text>
            <Text fontWeight="bold">{toHoursAndMinutes(runtime)}</Text>
          </Flex>

          <Flex
            flexWrap="wrap"
            mt={8}
            ml={8}
            gap={4}
            justifyItems="start"
            alignItems="center"
          >
            {vote_average ? (
              <Box
                w="14"
                h="14"
                bg="gray.800"
                rounded="full"
                transform="translateX(-50%)"
              >
                <CircularProgress
                  value={Math.round(vote_average * 10)}
                  size="100%"
                  trackColor="#374151"
                  color={
                    vote_average >= 7.5
                      ? "green"
                      : vote_average >= 5
                      ? "orange"
                      : "red"
                  }
                >
                  <CircularProgressLabel
                    fontSize={{ md: "0.9rem" }}
                    fontWeight="bold"
                  >{`${Math.round(vote_average * 10)}%`}</CircularProgressLabel>
                </CircularProgress>
              </Box>
            ) : (
              ""
            )}
            <Flex>
              User <br /> Score
            </Flex>
            <Flex alignItems="center" gap={4}>
              <Link href={homepage} isExternal>
                <BiWorld size="2rem" />
              </Link>

              {instagram_id && (
                <Link href={`https://instagram.com/${instagram_id}`} isExternal>
                  <FaInstagramSquare size="2rem" />
                </Link>
              )}

              {facebook_id && (
                <Link href={`https://facebook.com/${facebook_id}`} isExternal>
                  <FaFacebook size="2rem" />
                </Link>
              )}

              {twitter_id && (
                <Link href={`https://twitter.com/${twitter_id}`} isExternal>
                  <AiFillTwitterCircle size="2rem" />
                </Link>
              )}
            </Flex>
          </Flex>

          <Flex flexDir="column" w={{ base: "", md: "" }} mt={4}>
            <Text
              fontSize={{ base: "2rem", md: "1.5rem", lg: "2rem" }}
              fontWeight="bold"
              mb={4}
            >
              Overview
            </Text>
            <Text as="p" fontWeight="bold">
              {overview}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </SectionContainer>
  );
};

export default MoviePage;
