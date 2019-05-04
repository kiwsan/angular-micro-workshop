import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DiscoverModule} from '../../projects/discover/src/lib/discover.module';
import {MoviesModule} from '../../projects/movies/src/lib/movies.module';
import {ReviewsModule} from '../../projects/reviews/src/lib/reviews.module';
import {SearchModule} from '../../projects/search/src/lib/search.module';
import {TrendingModule} from '../../projects/trending/src/lib/trending.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    TrendingModule,
    SearchModule,
    ReviewsModule,
    MoviesModule,
    DiscoverModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
