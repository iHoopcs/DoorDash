import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  //retrieve from parent component
  @Input() restaurants: any; 
  @Input() restaurantHrefs: any; 
  constructor(){}
  
}
