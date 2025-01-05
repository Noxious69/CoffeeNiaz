import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {ApisServiceService} from "../../../backend/services/apis-service.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-best-selles',
  standalone: true,
  imports: [RouterModule, NgForOf],
  templateUrl: './best-selles.component.html',
  styleUrl: './best-selles.component.css'
})
export class BestSellesComponent implements OnInit{

  constructor(private api:ApisServiceService) {}
  products: any[] = [];

  ngOnInit(){
  this.api.getAllProducts().subscribe(
    (response: any) => {
      this.products = response.products; // فرض شده که `response.products` شامل لیست محصولات است
    },
    (error) => {
      console.error('Error fetching products:', error);
    }
  );
  }


}
