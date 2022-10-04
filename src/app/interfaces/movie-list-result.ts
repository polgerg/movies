import { Movie } from "./movie"

export interface MovieListResult {
    page: number,
    results: Movie[],
    total_results: number,
    total_pages: number
}
