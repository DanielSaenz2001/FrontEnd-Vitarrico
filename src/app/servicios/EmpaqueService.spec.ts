import { TestBed } from '@angular/core/testing';

import { EmpaqueService } from './EmpaqueService';

describe('EmpaqueService', () => {
  let service: EmpaqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpaqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
