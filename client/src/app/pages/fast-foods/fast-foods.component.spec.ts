import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastFoodsComponent } from './fast-foods.component';

describe('FastFoodsComponent', () => {
  let component: FastFoodsComponent;
  let fixture: ComponentFixture<FastFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FastFoodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
