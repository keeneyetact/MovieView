import { FC, useEffect, useState } from "react";
import { SideMovies } from "../sideMovies";
import { now_playing } from "../types";

export const ComingSoon: FC = () => {
  const [comingSoon, setComingSoon] = useState<now_playing["results"]>([]);
  const [loading, setLoading] = useState(false);
  const APIKEY = process.env.NEXT_PUBLIC_MOVIEDB_APIKEY;

  const fetchComingSoon = async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-GB&page=1`
    );
    const movies = await data.json();
    setComingSoon(movies.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchComingSoon();
  }, []);

  return (
    <>
      <SideMovies
        name="Coming Soon"
        loading={loading}
        comingSoon={comingSoon}
        id="coming_soon"
      />
    </>
  );
};
