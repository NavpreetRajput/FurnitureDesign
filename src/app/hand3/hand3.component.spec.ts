import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hand3Component } from './hand3.component';
// Straight Jasmine testing without Angular's testing support

describe('Hand3Component', () => {
  let component: Hand3Component;
  let fixture: ComponentFixture<Hand3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hand3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hand3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
