import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'shared-layout',
  template: `
      <shared-header></shared-header>
      <div class="container">
          <ng-content></ng-content>
      </div>
      <shared-footer></shared-footer>
      {{router}}
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  router: any;

  constructor(private routerParam: Router) {
    this.router = routerParam.url;
  }

  ngOnInit() {
  }
}
