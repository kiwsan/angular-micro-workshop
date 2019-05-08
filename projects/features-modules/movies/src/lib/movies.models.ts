// Upcomming
export interface Upcomming {
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

export interface Dates {
  maximum: string;
  minimum: string;
}

// Top Rate
export interface TopRated {
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

// Popular
export interface Popular {
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

// Now playing
export interface NowPlaying {
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

export interface Dates {
  maximum: string;
  minimum: string;
}

// Recommendations
export interface Recommendation {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

// Video
export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

// Release Dates
export interface ReleaseDate {
  id: number;
  results?: (ResultsEntity)[] | null;
}

export interface ResultsEntity {
  iso_3166_1: string;
  release_dates?: (ReleaseDatesEntity)[] | null;
}

export interface ReleaseDatesEntity {
  certification: string;
  iso_639_1: string;
  release_date: string;
  type: number;
  note?: string | null;
}


// External Ids
export interface ExternalId {
  id: number;
  imdb_id: string;
  facebook_id?: null;
  instagram_id?: null;
  twitter_id?: null;
}

// Credit
export interface Credit {
  id: number;
  cast?: (CastEntity)[] | null;
  crew?: (CrewEntity)[] | null;
}

export interface CastEntity {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path?: string | null;
}

export interface CrewEntity {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path?: string | null;
}

// Alternative Titles
export interface AlternativeTitle {
  id: number;
  titles?: (TitlesEntity)[] | null;
}

export interface TitlesEntity {
  iso_3166_1: string;
  title: string;
  type: string;
}

// detail
export interface Detail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: null;
  budget: number;
  genres?: (GenresEntity)[] | null;
  homepage?: null;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: (ProductionCompaniesEntity)[] | null;
  production_countries?: (ProductionCountriesEntity)[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: (SpokenLanguagesEntity)[] | null;
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
  iso_639_1: string;
  name: string;
}
