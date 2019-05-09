import {NgModule} from '@angular/core';
import {ReviewsComponent} from './reviews.component';
import {HomeComponent} from './home/home.component';
import {ReviewsRoutingModule} from './reviews-routing.module';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ReviewsComponent, HomeComponent],
  imports: [
    ReviewsRoutingModule,
    NgbModalModule.forRoot()
  ],
  exports: [ReviewsComponent]
})
export class ReviewsModule {
}
