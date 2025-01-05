import {Component, OnInit} from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import {RouterLink} from "@angular/router";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {ApisServiceService} from "../../backend/services/apis-service.service";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, NgForOf, CurrencyPipe],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  orders: any[] = [];
  orderData: any[] = [];
  constructor(private service: ApisServiceService) {}

  ngOnInit() {
    this.getOrders();
  }

  get totalPrice(): number {
    return this.orders.reduce((acc, curr) => acc + (curr.totalPrice || 0), 0);
  }

  getOrders() {
    this.service.getAllOrders(this.orderData as any).subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }
}
