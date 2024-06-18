import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  name: string = ''; 
  type: string = ''; 
  image: string = ''; 
  hours: string = ''; 
  rating: Number = 0; 

  constructor(private http:HttpClient){}

  createRestaurant(){
    //store data to send to server
    let bodyData = {
      "name": this.name, 
      "type": this.type, 
      "image": this.image, 
      "hours": this.hours, 
      "rating": this.rating
    }; 

    //POST request --> send form data to server endpoint
    this.http.post('http://localhost:3000/add-restaurant', bodyData, {responseType: 'text'}).subscribe((resultData: any) => {
      console.log(resultData); 
      alert('Restaurant Created')
    })

    //reset values
    this.name = ''; 
    this.type = ''; 
    this.image = ''; 
    this.hours = ''; 
    this.rating = 0; 
  }
  
}
