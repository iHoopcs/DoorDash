import { Component } from '@angular/core';
import { FetchRestaurantsService } from '../../services/restaurants/fetch-restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  restaurants: any = []; 
  restaurantHrefs: string[] = []; 
  constructor(private http: FetchRestaurantsService){}

  ngOnInit():void {
    this.http.fetchRestaurants().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 

      this.restaurants.forEach((rest: any) => {
        this.restaurantHrefs.push(`http://localhost:4200/restaurant/${rest.type}/${rest.name}/${rest.id}`)
      })
      console.log(this.restaurantHrefs); 
    }); 
  }
}
