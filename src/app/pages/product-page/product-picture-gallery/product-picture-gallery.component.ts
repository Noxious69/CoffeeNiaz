import { Component ,ChangeDetectorRef } from '@angular/core';
import {ApisServiceService} from "../../../backend/services/apis-service.service";

@Component({
  selector: 'app-product-picture-gallery',
  standalone: true,
  imports: [ ],
  templateUrl: './product-picture-gallery.component.html',
  styleUrl: './product-picture-gallery.component.css'
})
export class ProductPictureGalleryComponent {
  quantity: number = 1;

  constructor(private apiService: ApisServiceService) {}

  // متد برای کاهش تعداد
  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // متد برای افزایش تعداد
  increaseQuantity(): void {
    this.quantity++;
  }

  // متد برای افزودن به سبد خرید
  addToCart(): void {
    const orderData = {
      itemId: 123, // شناسه محصول
      phoneNumber: '09123456789',
      firstName: 'John',
      lastName: 'Doe',
      address: 'Tehran, Iran',
      postalCode: '12345',
      email: 'johndoe@example.com',
      notes: 'Some notes about the order',
      orderDate: new Date().toISOString(),
      items: [
        {
          productId: 123, // شناسه محصول
          count: this.quantity, // تعداد محصول
          price: 240000, // قیمت محصول
        },
      ],
    };

    this.apiService.addOrder(orderData).subscribe(
      (response) => {
        console.log('Order added successfully:', response);
      },
      (error) => {
        console.error('Error adding order:', error);
      }
    );
  }
}
