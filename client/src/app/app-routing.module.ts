import { DetailedRestaurantComponent } from './pages/detailed-restaurant/detailed-restaurant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FastFoodsComponent } from './pages/fast-foods/fast-foods.component';
import { CafeComponent } from './pages/cafe/cafe.component';
import { CasualComponent } from './pages/casual/casual.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'fast-food', component:FastFoodsComponent},
  {path:'cafe', component:CafeComponent},
  {path:'casual-dining', component:CasualComponent},
  {path:'restaurant/:type/:name/:id', component:DetailedRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
