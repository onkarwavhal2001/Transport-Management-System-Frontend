import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateseedsComponent } from './createseeds.component';

describe('CreateseedsComponent', () => {
  let component: CreateseedsComponent;
  let fixture: ComponentFixture<CreateseedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateseedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateseedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
