import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3Component } from './home3.component';
// Straight Jasmine testing without Angular's testing support

describe('Home3Component', () => {
  let component: Home3Component;
  let fixture: ComponentFixture<Home3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
