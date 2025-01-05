import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalService } from '../modal/service/modal.service';
import {ApisServiceService} from "../../backend/services/apis-service.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, NgForOf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
 constructor(private modalService:ModalService , private api:ApisServiceService) {}
 navbarProductsList: any[] = [];

 openModal(){
  this.modalService.openModal();
  console.log('clicked' )
 }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(
      (response: any) => {
        this.navbarProductsList = response; // فرض کنید پاسخ شامل یک آرایه از محصولات است
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

}
