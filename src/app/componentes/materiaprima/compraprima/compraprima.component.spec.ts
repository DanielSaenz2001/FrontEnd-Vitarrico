import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraprimaComponent } from './compraprima.component';

describe('CompraprimaComponent', () => {
  let component: CompraprimaComponent;
  let fixture: ComponentFixture<CompraprimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraprimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraprimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
