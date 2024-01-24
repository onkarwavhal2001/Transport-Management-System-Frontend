import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FregisterComponent } from './fregister.component';

describe('FregisterComponent', () => {
  let component: FregisterComponent;
  let fixture: ComponentFixture<FregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
