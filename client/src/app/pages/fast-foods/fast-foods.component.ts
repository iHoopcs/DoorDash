import { Component } from '@angular/core';
import { FetchFastFoodsService } from '../../services/fast-food/fetch-fast-foods.service';

@Component({
  selector: 'app-fast-foods',
  templateUrl: './fast-foods.component.html',
  styleUrl: './fast-foods.component.css'
})
export class FastFoodsComponent {
  restaurants: any = []; 
  restaurantHrefs: string[] = []; 
  constructor(private http: FetchFastFoodsService){}

  ngOnInit():void {
    this.http.fetchFastFoodPlaces().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 

      this.restaurants.forEach((rest: any) => {
        this.restaurantHrefs.push(`http://localhost:4200/restaurant/${rest.type}/${rest.name}/${rest.id}`)
      })
      console.log(this.restaurantHrefs); 
    }); 
  }
}
