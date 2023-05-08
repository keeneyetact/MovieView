import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { BigMovie } from "../bigMovie";
import { API_KEY } from "../constant";
import { SectionContainer } from "../layout/SectionContainer";
import { now_playing } from "../types";

export const NowPlaying: FC = () => {
  const [nowPlaying, setNowPlaying] = useState<now_playing["results"]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNowPlaying = async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-GB&page=1`
    );
    const movies = await data.json();
    setNowPlaying(movies.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  return (
    <SectionContainer id="now_playing" pt={{ base: 6, md: 4 }}>
      <Heading id="popular" my={8}>
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
    </SectionContainer>
  );
};
