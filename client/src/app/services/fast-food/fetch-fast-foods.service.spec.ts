import { TestBed } from '@angular/core/testing';

import { FetchFastFoodsService } from './fetch-fast-foods.service';

describe('FetchFastFoodsService', () => {
  let service: FetchFastFoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchFastFoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
