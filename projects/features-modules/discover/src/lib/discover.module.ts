import {NgModule} from '@angular/core';
import {DiscoverComponent} from './discover.component';
import {HomeComponent} from './home/home.component';
import {DiscoverRoutingModule} from './discover-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DiscoverApiClientService} from './discover-api-client.service';

@NgModule({
  declarations: [DiscoverComponent, HomeComponent],
  imports: [
    DiscoverRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [DiscoverComponent],
  providers: [DiscoverApiClientService]
})

export class DiscoverModule {
}
