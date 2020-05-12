import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondCalceeComponent } from './beyond-calcee.component';

describe('BeyondCalceeComponent', () => {
  let component: BeyondCalceeComponent;
  let fixture: ComponentFixture<BeyondCalceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeyondCalceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeyondCalceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
