import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchRestaurantsService {

  constructor(private http: HttpClient) { }

  fetchRestaurants(){
    return this.http.get('http://localhost:3000/getRestaurants'); 
  }
}
