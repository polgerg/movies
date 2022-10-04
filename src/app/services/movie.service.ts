import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieListResult } from '../interfaces/movie-list-result';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenresResult } from '../interfaces/genre';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly BASE_URL: string = 'https://api.themoviedb.org/3/';

  selectedMovie: BehaviorSubject<Movie | null> = new BehaviorSubject<Movie | null>(null)

  constructor(private http: HttpClient) { }

  getFilteredMoviesFromDatabase(value: string): Observable<MovieListResult> {
    return this.http.get<MovieListResult>(`${this.BASE_URL}search/movie`, {
      params: {
        api_key: environment.api_key,
        language: 'en-US',
        query: value,
        page: 3
      }
    })
  }

  getGenresFromDatabase(): Observable<GenresResult> {
    return this.http.get<GenresResult>(`${this.BASE_URL}genre/movie/list`, {
      params: {
        api_key: environment.api_key,
        language: 'en-US',
      }
    })
  }

  onShowMovieDetails(movie: Movie): void{
    this.selectedMovie.next(movie)
  } 
}
