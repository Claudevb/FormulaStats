import { TestBed } from '@angular/core/testing';

import { FormulaApiService } from './formula-api.service';

describe('FormulaApiService', () => {
  let service: FormulaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
