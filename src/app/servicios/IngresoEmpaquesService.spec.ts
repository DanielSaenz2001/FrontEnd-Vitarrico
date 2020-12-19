import { TestBed } from '@angular/core/testing';

import { IngresoEmpaquesService } from './IngresoEmpaquesService';

describe('IngresoEmpaquesService', () => {
  let service: IngresoEmpaquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresoEmpaquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
