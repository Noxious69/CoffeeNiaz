import { Component } from '@angular/core';
import {ApisServiceService} from "../../backend/services/apis-service.service";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoading = false;
  errorMessage: string | null = null;
  toastMessage = '';

  constructor(private api:ApisServiceService) {}

  login(form: NgForm) {
    if (form.invalid) return; // اگر فرم نامعتبر باشد، کاری انجام نده

    const { phone, password } = form.value;
    this.isLoading = true;
    this.errorMessage = null; // پاک کردن پیغام خطا

    this.api.signin(phone, password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.isLoading = false; // متوقف کردن بارگذاری
        this.toastMessage = 'ورود موفقیت‌آمیز بود';
        this.showToast('success-toast', this.toastMessage);
      },
      error: (err) => {
        this.isLoading = false; // متوقف کردن بارگذاری
        this.toastMessage = err.error.message || 'خطایی رخ داده است.';
        this.showToast('error-toast', this.toastMessage);
      }
    });
  }

  // نمایش Toast
  showToast(id: string, message: string): void {
    const toast = document.getElementById(id);
    if (toast) {
      const messageElement = toast.querySelector('#error-message');
      if (messageElement) messageElement.textContent = message;
      toast.classList.remove('hidden'); // نمایش Toast
      setTimeout(() => this.hideToast(id), 5000); // پنهان کردن خودکار بعد از 5 ثانیه
    }
  }

  // پنهان کردن Toast
  hideToast(id: string): void {
    const toast = document.getElementById(id);
    if (toast) toast.classList.add('hidden');
  }
}
