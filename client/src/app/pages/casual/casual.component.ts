import { Component } from '@angular/core';
import { FetchCasualsService } from '../../services/casual/fetch-casuals.service';

@Component({
  selector: 'app-casual',
  templateUrl: './casual.component.html',
  styleUrl: './casual.component.css'
})
export class CasualComponent {
  restaurants: any = []; 
  restaurantHrefs: string[] = []; 
  constructor(private http: FetchCasualsService){}

  ngOnInit():void {
    this.http.fetchCasualFoodPlaces().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 

      this.restaurants.forEach((rest: any) => {
        this.restaurantHrefs.push(`http://localhost:4200/restaurant/${rest.type}/${rest.name}/${rest.id}`)
      })
      console.log(this.restaurantHrefs); 
    }); 
  }
}
