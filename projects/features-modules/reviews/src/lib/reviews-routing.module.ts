import {ReviewsComponent} from './reviews.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'reviews', component: ReviewsComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ReviewsRoutingModule {
}
