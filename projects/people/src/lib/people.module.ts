import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [PeopleComponent, HomeComponent],
  imports: [
  ],
  exports: [PeopleComponent]
})
export class PeopleModule { }
