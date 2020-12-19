import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcompraprimaComponent } from './formcompraprima.component';

describe('FormcompraprimaComponent', () => {
  let component: FormcompraprimaComponent;
  let fixture: ComponentFixture<FormcompraprimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcompraprimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcompraprimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
