import { TestBed } from '@angular/core/testing';

import { FetchRestaurantsService } from './fetch-restaurants.service';

describe('FetchRestaurantsService', () => {
  let service: FetchRestaurantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchRestaurantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
