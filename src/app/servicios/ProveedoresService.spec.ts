import { TestBed } from '@angular/core/testing';

import { ProveedoresService } from './ProveedoresService';

describe('ProveedoresService', () => {
  let service: ProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
