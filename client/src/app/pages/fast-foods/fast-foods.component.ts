import { Component } from '@angular/core';
import { FetchFastFoodsService } from '../../services/fast-food/fetch-fast-foods.service';

@Component({
  selector: 'app-fast-foods',
  templateUrl: './fast-foods.component.html',
  styleUrl: './fast-foods.component.css'
})
export class FastFoodsComponent {
  restaurants: any = []; 

  constructor(private http: FetchFastFoodsService){
    this.http.fetchFastFoodPlaces().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 
    })
  }
}
