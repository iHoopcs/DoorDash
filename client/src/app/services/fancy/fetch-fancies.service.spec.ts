import { TestBed } from '@angular/core/testing';

import { FetchFanciesService } from './fetch-fancies.service';

describe('FetchFanciesService', () => {
  let service: FetchFanciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchFanciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
