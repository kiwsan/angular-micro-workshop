import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DiscoverModule} from '../../projects/features-modules/discover/src/lib/discover.module';
import {MoviesModule} from '../../projects/features-modules/movies/src/lib/movies.module';
import {ReviewsModule} from '../../projects/features-modules/reviews/src/lib/reviews.module';
import {SearchModule} from '../../projects/features-modules/search/src/lib/search.module';
import {TrendingModule} from '../../projects/features-modules/trending/src/lib/trending.module';
import {ConfigService} from '../../projects/shared/src/lib/app-config.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpServiceModule} from '../../projects/shared/src/lib/async-services/http';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {SharedModule} from '../../projects/shared/src/lib/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    AppComponent
  ],
  imports: [
    TrendingModule,
    SearchModule,
    ReviewsModule,
    MoviesModule,
    DiscoverModule,
    /** Angular core dependencies */
    BrowserModule,
    HttpClientModule,
    /** App custom dependencies */
    AppRoutingModule,
    SharedModule,
    HttpServiceModule.forRoot(),
    /** Third party modules */
    NgbModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
