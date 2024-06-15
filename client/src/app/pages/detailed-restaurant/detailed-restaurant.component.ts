import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailed-restaurant',
  templateUrl: './detailed-restaurant.component.html',
  styleUrl: './detailed-restaurant.component.css'
})
export class DetailedRestaurantComponent {

  constructor(private route: ActivatedRoute){
    //fetch param values from active url
    const paramType = this.route.snapshot.paramMap.get('type');
    const paramName = this.route.snapshot.paramMap.get('name');
    const paramId = this.route.snapshot.paramMap.get('id');


  }
}
