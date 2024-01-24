import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsdetailsComponent } from './seedsdetails.component';

describe('SeedsdetailsComponent', () => {
  let component: SeedsdetailsComponent;
  let fixture: ComponentFixture<SeedsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeedsdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeedsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
