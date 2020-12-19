import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcompraempaqueComponent } from './formcompraempaque.component';

describe('FormcompraempaqueComponent', () => {
  let component: FormcompraempaqueComponent;
  let fixture: ComponentFixture<FormcompraempaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcompraempaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcompraempaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
