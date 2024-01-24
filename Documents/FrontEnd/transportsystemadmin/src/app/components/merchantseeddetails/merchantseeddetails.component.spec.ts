import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantseeddetailsComponent } from './merchantseeddetails.component';

describe('MerchantseeddetailsComponent', () => {
  let component: MerchantseeddetailsComponent;
  let fixture: ComponentFixture<MerchantseeddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchantseeddetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MerchantseeddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
