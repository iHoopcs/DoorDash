import { TestBed } from '@angular/core/testing';

import { FetchCasualsService } from './fetch-casuals.service';

describe('FetchCasualsService', () => {
  let service: FetchCasualsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchCasualsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
