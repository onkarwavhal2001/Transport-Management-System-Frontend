import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefarmerComponent } from './createfarmer.component';

describe('CreatefarmerComponent', () => {
  let component: CreatefarmerComponent;
  let fixture: ComponentFixture<CreatefarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatefarmerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatefarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
