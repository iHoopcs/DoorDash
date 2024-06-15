import { Component } from '@angular/core';
import { FetchFanciesService } from '../../services/fancy/fetch-fancies.service';

@Component({
  selector: 'app-fancy',
  templateUrl: './fancy.component.html',
  styleUrl: './fancy.component.css'
})
export class FancyComponent {
  restaurants: any = []; 
  restaurantHrefs: string[] = []; 
  constructor(private http: FetchFanciesService){}

  ngOnInit():void {
    this.http.fetchFancyFoodPlaces().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 

      this.restaurants.forEach((rest: any) => {
        this.restaurantHrefs.push(`http://localhost:4200/restaurant/${rest.type}/${rest.name}/${rest.id}`)
      })
      console.log(this.restaurantHrefs); 
    }); 
  }
}
