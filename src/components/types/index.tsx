export interface popular {
  page: number;
  results?: Movies["results"] | null;
  total_pages: number;
  total_results: number;
}

export interface Movies {
  results: {
    adult: boolean;
    backdrop_path?: string | null;
    genre_ids?: (number | null)[] | null;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}

export interface GenresT {
  genre_ids?: (number | null)[] | null;
}

export interface MoviesT {
  adult: boolean;
  backdrop_path?: string | null;
  genre_ids?: (number | null)[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Root {
  genres?: GenresEntity[] | null;
}

export interface GenresEntity {
  id: number;
  name: string;
}
