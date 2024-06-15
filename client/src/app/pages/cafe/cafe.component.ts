import { Component } from '@angular/core';
import { FetchCafesService } from '../../services/cafe/fetch-cafes.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.css'
})
export class CafeComponent {
  restaurants: any = []; 
  restaurantHrefs: string[] = []; 
  constructor(private http: FetchCafesService){}

  ngOnInit():void {
    this.http.fetchCafes().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 

      this.restaurants.forEach((rest: any) => {
        this.restaurantHrefs.push(`http://localhost:4200/restaurant/${rest.type}/${rest.name}/${rest.id}`)
      })
      console.log(this.restaurantHrefs); 
    }); 
  }


}
