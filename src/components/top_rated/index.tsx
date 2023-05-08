import { FC, useEffect, useState } from "react";
import { API_KEY } from "../constant";
import { SideMovies } from "../sideMovies";
import { now_playing } from "../types";

export const TopRated: FC = () => {
  const [topRated, setTopRated] = useState<now_playing["results"]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTopRated = async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-GB&page=1`
    );
    const movies = await data.json();
    setTopRated(movies.results.slice(0, 10));
    setLoading(false);
  };

  useEffect(() => {
    fetchTopRated();
  }, []);

  return (
    <>
      <SideMovies
        name="Top Rated"
        loading={loading}
        comingSoon={topRated}
        id="top_rated"
        mt={4}
      />
    </>
  );
};
