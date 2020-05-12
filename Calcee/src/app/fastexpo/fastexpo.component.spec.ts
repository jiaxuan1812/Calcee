import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastexpoComponent } from './fastexpo.component';

describe('FastexpoComponent', () => {
  let component: FastexpoComponent;
  let fixture: ComponentFixture<FastexpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastexpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastexpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
