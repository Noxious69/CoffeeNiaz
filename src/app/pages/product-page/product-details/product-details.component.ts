import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  // Default tab selection
  selectedTab: string = 'profile';

  // Method to switch tabs
  setTab(tabName: string) {
    this.selectedTab = tabName;
  } 

}
