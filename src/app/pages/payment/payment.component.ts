import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
