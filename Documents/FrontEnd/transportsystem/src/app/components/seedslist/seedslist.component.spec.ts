import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedslistComponent } from './seedslist.component';

describe('SeedslistComponent', () => {
  let component: SeedslistComponent;
  let fixture: ComponentFixture<SeedslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeedslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeedslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
