import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MregisterComponent } from './mregister.component';

describe('MregisterComponent', () => {
  let component: MregisterComponent;
  let fixture: ComponentFixture<MregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
