import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss']
})
export class MovieDetailsModalComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
  }

  deselectMovie(): void {
    this.movieService.selectedMovie.next(null)
  }

}
