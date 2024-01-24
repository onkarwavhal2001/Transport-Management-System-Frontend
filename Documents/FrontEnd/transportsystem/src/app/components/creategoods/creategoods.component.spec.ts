import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategoodsComponent } from './creategoods.component';

describe('CreategoodsComponent', () => {
  let component: CreategoodsComponent;
  let fixture: ComponentFixture<CreategoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreategoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreategoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
