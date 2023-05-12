import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BigMovie } from "../bigMovie";
import { now_playing } from "../types";

export const NowPlaying: FC = () => {
  const [nowPlaying, setNowPlaying] = useState<now_playing["results"]>([]);
  const [loading, setLoading] = useState(false);
  const APIKEY = process.env.NEXT_PUBLIC_MOVIEDB_APIKEY;

  const fetchNowPlaying = async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-GB&page=1`
    );
    const movies = await data.json();
    setNowPlaying(movies.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  return (
    <Flex id="now_playing" flexDir="column">
      <Heading my={8} fontSize={{ base: "2rem", md: "1.5rem", lg: "2rem" }}>
        Now Playing
      </Heading>
      <Flex flexDir="column" gap={8}>
        {!loading ? (
          nowPlaying?.map((movie) => {
            return <BigMovie data={movie} key={movie.id} />;
          })
        ) : (
          <Spinner
            size="sm"
            color="blue.600"
            speed="0.65s"
            thickness="4px"
            emptyColor="gray.200"
          />
        )}
      </Flex>
    </Flex>
  );
};
