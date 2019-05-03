import { NgModule } from '@angular/core';
import { DiscoveryComponent } from './discovery.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [DiscoveryComponent, HomeComponent],
  imports: [
  ],
  exports: [DiscoveryComponent]
})
export class DiscoveryModule { }
