// Tv show
export interface TvShow {
  original_name: string;
  id: number;
  name: string;
  vote_count: number;
  vote_average: number;
  poster_path?: string | null;
  first_air_date: string;
  popularity: number;
  genre_ids?: (number | null)[] | null;
  original_language: string;
  backdrop_path?: string | null;
  overview: string;
  origin_country?: (string | null)[] | null;
}

// Person
export interface Person {
  popularity: number;
  id: number;
  profile_path?: string | null;
  name: string;
  known_for?: (KnownForEntity)[] | null;
  adult: boolean;
}

export interface KnownForEntity {
  vote_average: number;
  vote_count: number;
  id: number;
  video?: boolean | null;
  media_type: string;
  title?: string | null;
  popularity: number;
  poster_path?: string | null;
  original_language: string;
  original_title?: string | null;
  genre_ids?: (number | null)[] | null;
  backdrop_path?: string | null;
  adult?: boolean | null;
  overview: string;
  release_date?: string | null;
  original_name?: string | null;
  name?: string | null;
  first_air_date?: string | null;
  origin_country?: (string)[] | null;
}

// Multi
export interface Multi {
  original_name?: string | null;
  id: number;
  media_type: string;
  name?: string | null;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  first_air_date?: string | null;
  popularity: number;
  genre_ids?: (number)[] | null;
  original_language: string;
  backdrop_path: string;
  overview: string;
  origin_country?: (string)[] | null;
  video?: boolean | null;
  title?: string | null;
  original_title?: string | null;
  adult?: boolean | null;
  release_date?: string | null;
}

// Movie
export interface Movie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids?: (number)[] | null;
  backdrop_path?: null;
  adult: boolean;
  overview: string;
  release_date: string;
}

// Keyword
export interface Keyword {
  id: number;
  name: string;
}

// Collection
export interface Collection {
  adult: boolean;
  backdrop_path?: string | null;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path?: string | null;
}

// Company
export interface Company {
  id: number;
  logo_path?: null;
  name: string;
}
