import { TestBed } from '@angular/core/testing';

import { SeedsserviceService } from './seedsservice.service';

describe('SeedsserviceService', () => {
  let service: SeedsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeedsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
