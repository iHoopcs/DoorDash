import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCategoryIcon } from './food-category-icon.component';

describe('FoodIconComponent', () => {
  let component: FoodCategoryIcon;
  let fixture: ComponentFixture<FoodCategoryIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodCategoryIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCategoryIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
