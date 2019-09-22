import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {OnTheAirComponent} from './on-the-air/on-the-air.component';
import {NowPlayingComponent} from './now-playing/now-playing.component';
import {FeaturedListsComponent} from './featured-lists/featured-lists.component';
import {TopUsersComponent} from './top-users/top-users.component';

@NgModule({
  declarations: [HomeComponent, OnTheAirComponent, NowPlayingComponent, FeaturedListsComponent, TopUsersComponent],
  imports: [],
  exports: [HomeComponent]
})
export class HomeModule {
}
