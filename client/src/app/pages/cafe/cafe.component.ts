import { Component } from '@angular/core';
import { FetchCafesService } from '../../services/cafe/fetch-cafes.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.css'
})
export class CafeComponent {
  restaurants: any = []; 

  constructor(private http: FetchCafesService) {
    this.http.fetchCafes().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 
    })
  }
}
