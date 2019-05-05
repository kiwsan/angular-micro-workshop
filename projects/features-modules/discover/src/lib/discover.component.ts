import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'discover-discover',
  template: `
    <p>
      discover works!
      <router-outlet></router-outlet>
    </p>
  `,
  styles: []
})
export class DiscoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
