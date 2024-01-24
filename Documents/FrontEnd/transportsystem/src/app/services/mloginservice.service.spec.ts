import { TestBed } from '@angular/core/testing';

import { MloginserviceService } from './mloginservice.service';

describe('MloginserviceService', () => {
  let service: MloginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MloginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
