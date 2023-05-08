import { API_KEY } from "@/components/constant";
import { moviebyID, socials } from "@/components/types";
import MoviePage from "@/components/_pages/moviesPage";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const Movies: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<moviebyID>();
  const [socials, setSocials] = useState<socials>();
  const [loading, setLoading] = useState(false);

  const fetchMovie = useCallback(async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-GB`
    );

    const movie = await data.json();
    if (movie.success === false) {
      router.push("/404"); // navigate to the 404 page
      return; // return early to prevent further execution
    }
    setMovie(movie);

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${API_KEY}`
    );
    const socials = await res.json();
    setSocials(socials);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchMovie();
    }
  }, [id, fetchMovie]);

  return (
    <>
      {!loading
        ? movie && socials && <MoviePage data={movie} socials={socials} />
        : "loading..."}
    </>
  );
};

export default Movies;
