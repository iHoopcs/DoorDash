import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchCafesService {

  constructor(private http: HttpClient) { }

  fetchCafes(){
    return this.http.get('http://localhost:3000/getCafes'); 
  }
}
