import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-review-card',
  templateUrl: './customer-review-card.component.html',
  styleUrl: './customer-review-card.component.css'
})
export class CustomerReviewCardComponent {
  @Input() restaurant: any; 
}
