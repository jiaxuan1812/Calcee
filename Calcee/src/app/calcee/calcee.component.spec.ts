import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalceeComponent } from './calcee.component';

describe('CalceeComponent', () => {
  let component: CalceeComponent;
  let fixture: ComponentFixture<CalceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
