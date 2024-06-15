import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedRestaurantComponent } from './detailed-restaurant.component';

describe('DetailedRestaurantComponent', () => {
  let component: DetailedRestaurantComponent;
  let fixture: ComponentFixture<DetailedRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedRestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
