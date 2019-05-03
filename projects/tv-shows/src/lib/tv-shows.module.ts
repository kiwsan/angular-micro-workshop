import { NgModule } from '@angular/core';
import { TvShowsComponent } from './tv-shows.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [TvShowsComponent, HomeComponent],
  imports: [
  ],
  exports: [TvShowsComponent]
})
export class TvShowsModule { }
