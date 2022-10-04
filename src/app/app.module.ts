import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { SearchPanelComponent } from './components/pages/search-page/search-panel/search-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { FilteredMovieListComponent } from './components/pages/search-page/filtered-movie-list/filtered-movie-list.component';
import { HeaderComponent } from './components/common/header/header.component';
import { MovieDetailsModalComponent } from './components/pages/movie-details-modal/movie-details-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchPanelComponent,
    FilteredMovieListComponent,
    HeaderComponent,
    MovieDetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
