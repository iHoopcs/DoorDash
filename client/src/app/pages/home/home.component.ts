import { Component } from '@angular/core';
import { FetchRestaurantsService } from '../../services/restaurants/fetch-restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  restaurants: any = []; 

  constructor(private http: FetchRestaurantsService){
    this.http.fetchRestaurants().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 
    })
  }
}
