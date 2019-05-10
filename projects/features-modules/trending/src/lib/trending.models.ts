// Trending
export interface Trending {
  adult?: boolean | null;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
  id: number;
  original_language: string;
  original_title?: string | null;
  overview: string;
  poster_path: string;
  release_date?: string | null;
  title?: string | null;
  video?: boolean | null;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_name?: string | null;
  name?: string | null;
  first_air_date?: string | null;
  origin_country?: (string)[] | null;
}
