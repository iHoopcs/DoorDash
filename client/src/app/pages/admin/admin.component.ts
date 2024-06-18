import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private http: HttpClient){}

  onSubmit(restaurant: {restaurantName: string, typeRadios: string, restaurantImageSrc: string, restaurantHours: string,  restaurantRating: number  }): void {
    console.log(restaurant)
  }
}
