import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {OnTheAirComponent} from './on-the-air/on-the-air.component';
import {NowPlayingComponent} from './now-playing/now-playing.component';
import {MoviesTopRatedComponent} from './movies-top-rated/movies-top-rated.component';
import {TvsTopRatedComponent} from './tvs-top-rated/tvs-top-rated.component';
import {MoviesTopRatedService} from './movies-top-rated/movies-top-rated.service';
import {NowPlayingService} from './now-playing/now-playing.service';
import {OnTheAirService} from './on-the-air/on-the-air.service';
import {TvsTopRatedService} from './tvs-top-rated/tvs-top-rated.service';

@NgModule({
  declarations: [HomeComponent, OnTheAirComponent, NowPlayingComponent, MoviesTopRatedComponent, TvsTopRatedComponent],
  imports: [],
  exports: [HomeComponent],
  providers: [MoviesTopRatedService, NowPlayingService, OnTheAirService, TvsTopRatedService]
})
export class HomeModule {
}
