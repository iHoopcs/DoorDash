import { TestBed } from '@angular/core/testing';

import { FetchCafesService } from './fetch-cafes.service';

describe('FetchCafesService', () => {
  let service: FetchCafesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCafesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
