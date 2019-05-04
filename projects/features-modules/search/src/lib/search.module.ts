import {NgModule} from '@angular/core';
import {SearchComponent} from './search.component';
import {HomeComponent} from './home/home.component';
import {SearchRoutingModule} from './search-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SearchComponent, HomeComponent],
  imports: [
    SearchRoutingModule,
    NgbModule.forRoot()
  ],
  exports: [SearchComponent]
})
export class SearchModule {
}
