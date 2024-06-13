import { Component } from '@angular/core';
import { FetchFanciesService } from '../../services/fancy/fetch-fancies.service';

@Component({
  selector: 'app-fancy',
  templateUrl: './fancy.component.html',
  styleUrl: './fancy.component.css'
})
export class FancyComponent {
  restaurants: any = []; 

  constructor(private http: FetchFanciesService){
    this.http.fetchFancyFoodPlaces().subscribe((data) => {
      this.restaurants = data; 
      console.log(this.restaurants); 
    })
  }
}
