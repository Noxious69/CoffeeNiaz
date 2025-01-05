import {Component, OnInit} from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import {RouterLink} from "@angular/router";
import {ApisServiceService} from "../../backend/services/apis-service.service";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, CurrencyPipe, NgForOf],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  orders: any[] = []; // آرایه‌ای برای ذخیره اطلاعات سفارش‌ها
  totalPrice: number = 0; // مجموع قیمت کل

constructor(private api:ApisServiceService) {}

  filterData = {
    phoneNumber: '', // فیلدهای ورودی
    price: '',
    address: '',
    photo: '',
  };

  ngOnInit(): void {
    this.getOrders(this.filterData);
  }

// گرفتن اطلاعات سفارش‌ها
  getOrders(filterData: {
    phoneNumber?: string;
    price?: string;
    address?: string;
    photo?: string;
  }): void {
    this.api.getAllOrders(filterData).subscribe(
      (response) => {
        this.orders = response.orders || []; // فرض می‌کنیم داده‌ها در فیلد orders قرار دارند
        this.calculateTotalPrice(); // محاسبه مجموع قیمت
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  // کاهش تعداد محصول
  decreaseQuantity(order: any): void {
    if (order.quantity > 1) {
      order.quantity--;
      this.updateOrderPrice(order);
    }
  }

  // افزایش تعداد محصول
  increaseQuantity(order: any): void {
    order.quantity++;
    this.updateOrderPrice(order);
  }

  // به‌روزرسانی قیمت محصول و مجموع قیمت کل
  updateOrderPrice(order: any): void {
    order.totalPrice = order.unitPrice * order.quantity; // قیمت کل محصول
    this.calculateTotalPrice(); // به‌روزرسانی مجموع قیمت کل
  }

  // محاسبه مجموع قیمت کل
  calculateTotalPrice(): void {
    this.totalPrice = this.orders.reduce(
      (sum, order) => sum + order.totalPrice,
      0
    );
  }

  // به‌روزرسانی داده‌های فیلتر و گرفتن مجدد سفارش‌ها
  updateFilter(key: keyof typeof this.filterData, value: string): void {
    this.filterData[key] = value; // به‌روزرسانی فیلتر
    this.getOrders(this.filterData); // گرفتن سفارش‌ها با فیلتر جدید
  }

}
