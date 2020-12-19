import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormempaqueComponent } from './formempaque.component';

describe('FormempaqueComponent', () => {
  let component: FormempaqueComponent;
  let fixture: ComponentFixture<FormempaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormempaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormempaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
