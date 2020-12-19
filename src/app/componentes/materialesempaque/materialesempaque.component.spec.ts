import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesempaqueComponent } from './materialesempaque.component';

describe('MaterialesempaqueComponent', () => {
  let component: MaterialesempaqueComponent;
  let fixture: ComponentFixture<MaterialesempaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialesempaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesempaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
