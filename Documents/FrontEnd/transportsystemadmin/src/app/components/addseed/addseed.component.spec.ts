import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddseedComponent } from './addseed.component';

describe('AddseedComponent', () => {
  let component: AddseedComponent;
  let fixture: ComponentFixture<AddseedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddseedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddseedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
