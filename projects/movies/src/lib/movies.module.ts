import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [MoviesComponent, HomeComponent],
  imports: [
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
