import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
