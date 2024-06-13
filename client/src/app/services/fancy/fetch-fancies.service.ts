import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchFanciesService {

  constructor(private http: HttpClient) { }

  fetchFancyFoodPlaces(){
    return this.http.get('http://localhost:3000/getFancies')
  }
}
