import {NgModule} from '@angular/core';
import {SharedComponent} from './shared.component';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './containers/layout/layout.component';
import {FooterComponent} from './components/footer/footer.component';
import {AngularMaterialModule} from './themes/angular-material.module';
import {RouterModule} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {FooterApiV4Component} from './components/footer-api-v4/footer-api-v4.component';
import {HeaderApiV4Component} from './components/header-api-v4/header-api-v4.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SharedComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    FooterApiV4Component,
    HeaderApiV4Component],
  imports: [
    AngularMaterialModule,
    RouterModule,
    CommonModule
  ],
  exports: [SharedComponent, LayoutComponent]
})
export class SharedModule {
}
