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

export interface now_playing {
  dates: Dates;
  page: number;
  results?: MoviesT[] | null;
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface moviebyID {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: null;
  budget: number;
  genres?: GenresEntity[] | null;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductionCompaniesEntity[] | null;
  production_countries?: ProductionCountriesEntity[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: SpokenLanguagesEntity[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenresEntity {
  id: number;
  name: string;
}

export interface ProductionCompaniesEntity {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountriesEntity {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguagesEntity {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface socials {
  id: number;
  imdb_id: string;
  wikidata_id: string;
  facebook_id?: string;
  instagram_id?: string;
  twitter_id?: string;
}

export interface certT {
  id: number;
  results?: ResultsEntity[] | null;
}

export interface ResultsEntity {
  iso_3166_1: string;
  release_dates?: ReleaseDatesEntity[] | null;
}

export interface ReleaseDatesEntity {
  certification: string;
  descriptors?: null[] | null;
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
}
