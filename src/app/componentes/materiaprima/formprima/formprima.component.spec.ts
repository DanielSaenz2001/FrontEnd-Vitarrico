import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormprimaComponent } from './formprima.component';

describe('FormprimaComponent', () => {
  let component: FormprimaComponent;
  let fixture: ComponentFixture<FormprimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormprimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormprimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
