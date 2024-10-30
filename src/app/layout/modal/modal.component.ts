import { Component, OnInit } from '@angular/core';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  isOpen = false;
  
  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modalOpen$.subscribe((Open) => {
      this.isOpen = Open;
    });
  }

  closeModal() {
    this.modalService.closeModal()
  }
}
