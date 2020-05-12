import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Inputfield1Component } from './inputfield1.component';

describe('Inputfield1Component', () => {
  let component: Inputfield1Component;
  let fixture: ComponentFixture<Inputfield1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inputfield1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inputfield1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
