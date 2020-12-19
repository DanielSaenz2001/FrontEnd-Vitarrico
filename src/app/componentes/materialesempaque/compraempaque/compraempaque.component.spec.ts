import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraempaqueComponent } from './compraempaque.component';

describe('CompraempaqueComponent', () => {
  let component: CompraempaqueComponent;
  let fixture: ComponentFixture<CompraempaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraempaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraempaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
