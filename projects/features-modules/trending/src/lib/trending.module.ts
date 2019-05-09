import { NgModule } from '@angular/core';
import { TrendingComponent } from './trending.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [TrendingComponent, HomeComponent],
  imports: [
  ],
  exports: [TrendingComponent]
})
export class TrendingModule { }
