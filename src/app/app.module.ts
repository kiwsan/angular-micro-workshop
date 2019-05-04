import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DiscoverModule} from '../../projects/features-modules/discover/src/lib/discover.module';
import {MoviesModule} from '../../projects/features-modules/movies/src/lib/movies.module';
import {ReviewsModule} from '../../projects/features-modules/reviews/src/lib/reviews.module';
import {SearchModule} from '../../projects/features-modules/search/src/lib/search.module';
import {TrendingModule} from '../../projects/features-modules/trending/src/lib/trending.module';
import {ConfigService} from '../../projects/shared/src/lib/app-config.service';

/**
 * Calling functions or calling new is not supported in metadata when using AoT.
 * The work-around is to introduce an exported function.
 *
 * The reason for this limitation is that the AoT compiler needs to generate the code that calls the factory
 * and there is no way to import a lambda from a module, you can only import an exported symbol.
 */

export function configServiceFactory(config: ConfigService) {
  return () => config.load();
}

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
