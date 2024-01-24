import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemerchantComponent } from './updatemerchant.component';

describe('UpdatemerchantComponent', () => {
  let component: UpdatemerchantComponent;
  let fixture: ComponentFixture<UpdatemerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatemerchantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatemerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
