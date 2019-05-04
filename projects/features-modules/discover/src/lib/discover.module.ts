import {NgModule} from '@angular/core';
import {DiscoverComponent} from './discover.component';
import {HomeComponent} from './home/home.component';
import {DiscoverRoutingModule} from './discover-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DiscoverComponent, HomeComponent],
  imports: [
    DiscoverRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [DiscoverComponent]
})

export class DiscoverModule {
}
