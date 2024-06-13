import { Component, NgModule } from '@angular/core';
import { FetchRestaurantsService } from '../../services/restaurants/fetch-restaurants.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})
export class RestaurantCardComponent {
  restaurants: any = []; 

  constructor(private http: FetchRestaurantsService) {
    this.http.fetchRestaurants().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 
    })
  }
  
}
