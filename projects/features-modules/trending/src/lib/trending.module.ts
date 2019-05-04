import {NgModule} from '@angular/core';
import {TrendingComponent} from './trending.component';
import {HomeComponent} from './home/home.component';
import {TrendingRoutingModule} from './trending-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TrendingComponent, HomeComponent],
  imports: [
    TrendingRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [TrendingComponent]
})

export class TrendingModule {
}
