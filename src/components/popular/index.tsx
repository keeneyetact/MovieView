import {
  ContainerProps,
  Divider,
  Flex,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { FC, useCallback, useEffect, useState } from "react";
import { popular, Root } from "../types";
import { API_KEY } from "../constant";
import { GenreBadges } from "../genre";
import { Movie } from "../movie";
import { PopularFlex } from "../layout/popularFlex";
import { SectionContainer } from "../layout/SectionContainer";

export const Popular: FC<ContainerProps> = (props) => {
  const [movies, setMovies] = useState<popular["results"]>();
  const [badge, setBadge] = useState<Root["genres"]>([]);
  const [selectedBadgeId, setSelectedBadgeId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const badgeRequest = useCallback(async () => {
    try {
      setLoading(true);
      const query = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-GB`
      );
      const genreData = await query.json();
      setBadge(genreData.genres);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }, []);

  const popularRequest = async () => {
    try {
      setLoading(true);
      const query = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-GB&page=1`
      );
      const popularMovies = await query.json();
      setMovies(popularMovies.results);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    badgeRequest();
    popularRequest();
  }, []);

  return (
    <SectionContainer
      id="popular"
      mt={{ base: "5.5rem", md: "4.5rem" }}
      {...props}
    >
      <Heading
        id="popular"
        fontSize={{ base: "2rem", md: "1.5rem", lg: "2rem" }}
      >
        Popular Movies
      </Heading>
      {!loading ? (
        <Flex justifyContent="start" flexWrap="wrap" gap={4} my={8}>
          {badge
            ? badge?.map((item) => {
                return (
                  <GenreBadges
                    data={item}
                    selectedBadgeId={selectedBadgeId}
                    setSelectedBadgeId={setSelectedBadgeId}
                    setMovies={setMovies}
                    key={item.id}
                  />
                );
              })
            : "can't load Genres"}
        </Flex>
      ) : (
        <Spinner
          size="sm"
          color="blue.600"
          speed="0.65s"
          thickness="4px"
          emptyColor="gray.200"
        />
      )}
      {!loading ? (
        <PopularFlex>
          {movies?.map((item) => {
            return <Movie data={item} key={item.id} />;
          })}
        </PopularFlex>
      ) : (
        <Spinner
          size="sm"
          color="blue.600"
          speed="0.65s"
          thickness="4px"
          emptyColor="gray.200"
        />
      )}
      <Divider mt={16} />
    </SectionContainer>
  );
};
