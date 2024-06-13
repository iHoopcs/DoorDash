import { Component } from '@angular/core';
import { FetchCasualsService } from '../../services/casual/fetch-casuals.service';

@Component({
  selector: 'app-casual',
  templateUrl: './casual.component.html',
  styleUrl: './casual.component.css'
})
export class CasualComponent {
  restaurants: any = []; 

  constructor(private http: FetchCasualsService) {
    this.http.fetchCasualFoodPlaces().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 
    })
  }
}
