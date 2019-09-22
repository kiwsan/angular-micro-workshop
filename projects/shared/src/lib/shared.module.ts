import {NgModule} from '@angular/core';
import {SharedComponent} from './shared.component';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './containers/layout/layout.component';
import {FooterComponent} from './components/footer/footer.component';
import {AngularMaterialModule} from './themes/angular-material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SharedComponent, LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    AngularMaterialModule,
    RouterModule
  ],
  exports: [SharedComponent, LayoutComponent]
})
export class SharedModule {
}
