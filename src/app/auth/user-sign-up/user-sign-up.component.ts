import { Component } from '@angular/core';
import {ApisServiceService} from "../../backend/services/apis-service.service";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './user-sign-up.component.html',
  styleUrl: './user-sign-up.component.css'
})
export class UserSignUpComponent {
  isLoading = false;
  errorMessage: string | null = null;
  toastMessage = '';

  constructor(private api: ApisServiceService) {}

  signup(form: NgForm) {
    if (form.invalid) return;

    this.isLoading = true;
    this.errorMessage = null;

    const userData = {
      username: form.value.username,
      fullname: form.value.fullname,
      password: form.value.password,
      phoneNumber: form.value.phoneNumber,
      email: form.value.email
    };

    this.api.signup(userData).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        this.isLoading = false;
        this.toastMessage = 'ثبت نام با موفقیت انجام شد';
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
