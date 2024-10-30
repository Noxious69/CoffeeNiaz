import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalOpenSubject = new BehaviorSubject<boolean>(false);
  modalOpen$ = this.modalOpenSubject.asObservable();

  // Method to open the modal
  openModal() {
    this.modalOpenSubject.next(true);
  }
  
  closeModal() {
    this.modalOpenSubject.next(false);
  }
}
