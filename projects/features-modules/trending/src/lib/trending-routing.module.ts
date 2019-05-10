import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TrendingComponent} from './trending.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'trending', component: TrendingComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class TrendingRoutingModule {
}
