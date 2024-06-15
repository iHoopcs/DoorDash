import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-food-category-icon',
  templateUrl: './food-category-icon.component.html',
  styleUrl: './food-category-icon.component.css'
})
export class FoodCategoryIcon {
  title = "This is a food category icon"; 
  @Input() foodCategories: any; 
}
