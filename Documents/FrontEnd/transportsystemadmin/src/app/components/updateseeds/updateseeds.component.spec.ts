import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateseedsComponent } from './updateseeds.component';

describe('UpdateseedsComponent', () => {
  let component: UpdateseedsComponent;
  let fixture: ComponentFixture<UpdateseedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateseedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateseedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
