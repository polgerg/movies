import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredMovieListComponent } from './filtered-movie-list.component';

describe('FilteredMovieListComponent', () => {
  let component: FilteredMovieListComponent;
  let fixture: ComponentFixture<FilteredMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredMovieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
