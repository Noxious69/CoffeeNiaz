import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalService } from '../modal/service/modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ FontAwesomeModule ,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
 constructor(private modalService:ModalService){}

 openModal(){
  this.modalService.openModal();
  console.log('clicked' )
 }
}
