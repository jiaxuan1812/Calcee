import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeaComponent } from './eea.component';

describe('EeaComponent', () => {
  let component: EeaComponent;
  let fixture: ComponentFixture<EeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
