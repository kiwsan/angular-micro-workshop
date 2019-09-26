import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterApiV4Component} from './footer-api-v4.component';

describe('FooterApiV4Component', () => {
  let component: FooterApiV4Component;
  let fixture: ComponentFixture<FooterApiV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterApiV4Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterApiV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
