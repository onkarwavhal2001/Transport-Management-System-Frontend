import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmergooddetailsComponent } from './farmergooddetails.component';

describe('FarmergooddetailsComponent', () => {
  let component: FarmergooddetailsComponent;
  let fixture: ComponentFixture<FarmergooddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmergooddetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmergooddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
