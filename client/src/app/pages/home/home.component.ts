import { Component } from '@angular/core';
import { FetchRestaurantsService } from '../../services/restaurants/fetch-restaurants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  restaurants: any = []; 
  constructor(private http: FetchRestaurantsService){}

  ngOnInit():void {
    this.http.fetchRestaurants().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 
 
        this.restaurants.forEach((rest:any) => {
          console.log('id', typeof(rest.id), rest.id)
          rest.href = `restaurant/${rest.type}/${rest.name}`
        })
        console.log(this.restaurants)
    }); 
  }
}
