import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchCasualsService {

  constructor(private http: HttpClient) { }

  fetchCasualFoodPlaces() {
    return this.http.get('http://localhost:3000/getCasuals'); 
  }
}
