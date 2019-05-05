export interface Page<T> {
  page: number;
  total_results: number;
  total_pages: number;
  results?: Array<T> | null;
}

// https://medium.com/@JeremyLaine/server-side-pagination-and-filtering-with-angular-6-280a7909e783
