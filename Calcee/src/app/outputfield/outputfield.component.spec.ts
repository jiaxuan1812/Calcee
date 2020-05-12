import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputfieldComponent } from './outputfield.component';

describe('OutputfieldComponent', () => {
  let component: OutputfieldComponent;
  let fixture: ComponentFixture<OutputfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
