import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchRestaurantsService } from '../../services/restaurants/fetch-restaurants.service';
@Component({
  selector: 'app-detailed-restaurant',
  templateUrl: './detailed-restaurant.component.html',
  styleUrl: './detailed-restaurant.component.css'
})
export class DetailedRestaurantComponent {
  restaurant: any; 
  

  constructor(private route: ActivatedRoute, private http: FetchRestaurantsService ){}

  ngOnInit():void {
    //fetch param values from active url
    const paramType:string | null = this.route.snapshot.paramMap.get('type');
    const paramName:string | null = this.route.snapshot.paramMap.get('name');
    const paramId:string | null = this.route.snapshot.paramMap.get('id');

    this.http.fetchRestaurants().subscribe((data) => {
      
      let fetchedRestaurants:any = []; 
      fetchedRestaurants = data; 
      console.log('DB',typeof(fetchedRestaurants), fetchedRestaurants); 

      //match param type,name,id of active url to find restaurant in db
      fetchedRestaurants.forEach((dbItem:any) => {
        if (paramType === dbItem.type && paramName === dbItem.name && paramId === dbItem.id){
          this.restaurant = dbItem;
          //console.log('Fetched',this.restaurant) 
        }
      })
    });  
  }
}
