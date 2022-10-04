import { Component, Input, OnInit, Output } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Genre } from 'src/app/interfaces/genre';
import { Movie } from 'src/app/interfaces/movie';
import { MovieListResult } from 'src/app/interfaces/movie-list-result';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {


  @Output() movies: MovieListResult | undefined;
  isNoResult: boolean = false;
  isMovieSelected: boolean = false;
  isFirstInit: boolean = true;

  
  genres: Genre[] = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenresFromDatabase().subscribe(
      g => this.genres = g.genres
    )
    this.movieService.selectedMovie.subscribe((selectedMovie) => {
      selectedMovie ? this.isMovieSelected = true : this.isMovieSelected = false
    })
  }

  getFilteredMovies(value: string): void{
    this.isFirstInit ? this.isFirstInit = false : null
    this.movieService.getFilteredMoviesFromDatabase(value).subscribe(movies => {
      this.movies = movies;
      this.movies.results.forEach(movie => {
        movie.genres = movie.genre_ids
          .map(id => this.genres.find(genre => genre.id === id))
          .map(genre => genre ? genre.name : 'No genre were given')
        console.log(movie.genres)
      })

      movies.results.length > 0 
      ?
      this.isNoResult = false
      :
      this.isNoResult = true
      
      }
    )
  }
}
