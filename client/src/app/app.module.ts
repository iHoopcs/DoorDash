import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { FastFoodsComponent } from './pages/fast-foods/fast-foods.component';
import { HomeComponent } from './pages/home/home.component';
import { CafeComponent } from './pages/cafe/cafe.component';
import { CasualComponent } from './pages/casual/casual.component';
import { FancyComponent } from './pages/fancy/fancy.component';
import { FoodCategoryIcon } from './components/food-category-icon/food-category-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RestaurantCardComponent,
    FoodCategoryIcon,
    SubNavbarComponent,
    FastFoodsComponent,
    HomeComponent,
    CafeComponent,
    CasualComponent,
    FancyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
