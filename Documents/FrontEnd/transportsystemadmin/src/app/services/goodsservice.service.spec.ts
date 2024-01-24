import { TestBed } from '@angular/core/testing';

import { GoodsserviceService } from './goodsservice.service';

describe('GoodsserviceService', () => {
  let service: GoodsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
