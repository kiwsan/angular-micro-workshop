import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SearchComponent} from './search.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'search', component: SearchComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SearchRoutingModule {
}
