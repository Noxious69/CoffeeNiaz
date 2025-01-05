import { Component } from '@angular/core';
import {ApisServiceService} from "../../backend/services/apis-service.service";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  isLoading = false;
  errorMessage: string | null = null;
  toastMessage = '';

  constructor(private api: ApisServiceService) {}

  adminLogin(form: NgForm) {
    if (form.invalid) return;

    this.isLoading = true;
    this.errorMessage = null;

    const { fullname, password } = form.value;

    this.api.adminLogin(fullname, password).subscribe({
      next: (response) => {
        console.log('Admin login successful', response);
        this.isLoading = false;
        this.toastMessage = 'ورود موفقیت‌آمیز بود';
        this.showToast('success-toast', this.toastMessage);
      },
      error: (err) => {
        this.isLoading = false;
        this.toastMessage = err.error.message || 'خطایی رخ داده است.';
        this.showToast('error-toast', this.toastMessage);
      }
    });
  }

  showToast(id: string, message: string): void {
    const toast = document.getElementById(id);
    if (toast) {
      const messageElement = toast.querySelector('#error-message');
      if (messageElement) messageElement.textContent = message;
      toast.classList.remove('hidden');
      setTimeout(() => this.hideToast(id), 5000);
    }
  }

  hideToast(id: string): void {
    const toast = document.getElementById(id);
    if (toast) toast.classList.add('hidden');
  }
}
