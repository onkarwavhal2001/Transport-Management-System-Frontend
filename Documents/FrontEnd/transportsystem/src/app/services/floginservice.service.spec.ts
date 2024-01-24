import { TestBed } from '@angular/core/testing';

import { FloginserviceService } from './floginservice.service';

describe('FloginserviceService', () => {
  let service: FloginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
