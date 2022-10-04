import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieListResult } from 'src/app/interfaces/movie-list-result';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-filtered-movie-list',
  templateUrl: './filtered-movie-list.component.html',
  styleUrls: ['./filtered-movie-list.component.scss']
})
export class FilteredMovieListComponent implements OnInit {

  @Input() movies: MovieListResult | undefined;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  showMovieDetails(movie: Movie): void {
    this.movieService.onShowMovieDetails(movie)
  }

}
