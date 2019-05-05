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
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

export interface Tv {
  original_name: string;
  genre_ids?: (number)[] | null;
  name: string;
  popularity: number;
  origin_country?: (string)[] | null;
  vote_count: number;
  first_air_date: string;
  backdrop_path: string;
  original_language: string;
  id: number;
  vote_average: number;
  overview: string;
  poster_path: string;
}
