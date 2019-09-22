import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule],
})
export class AngularMaterialModule {
}
