import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'shared-layout',
  template: `
      <shared-header></shared-header>
      <div class="container">
          <ng-content></ng-content>
      </div>
      <shared-footer></shared-footer>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
