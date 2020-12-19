import { TestBed } from '@angular/core/testing';

import { IngresoPrimasService } from './IngresoPrimasService';

describe('IngresoPrimasService', () => {
  let service: IngresoPrimasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresoPrimasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
