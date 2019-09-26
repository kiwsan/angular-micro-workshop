import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderApiV4Component} from './header-api-v4.component';

describe('HeaderApiV4Component', () => {
  let component: HeaderApiV4Component;
  let fixture: ComponentFixture<HeaderApiV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderApiV4Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderApiV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
