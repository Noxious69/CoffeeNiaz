import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HeroPartComponent } from "./pages/~Landing/hero-part/hero-part.component";
import { BestSellesComponent } from "./pages/~Landing/best-selles/best-selles.component";
import { CategoryComponent } from "./pages/~Landing/category/category.component";
import { LandingBlogComponent } from "./pages/~Landing/landing-blog/landing-blog.component";
import { LandingPageComponent } from "./pages/~Landing/landing-page.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { LoginComponent } from "./auth/login/login.component";
import { VerificationCodeComponent } from "./auth/verification-code/verification-code.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { ShoppingCartComponent } from "./pages/shopping-cart/shopping-cart.component";
import { ChatBotComponent } from "./pages/chat-bot/chat-bot.component";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroPartComponent, BestSellesComponent, CategoryComponent, LandingBlogComponent, LandingPageComponent, ProductPageComponent, LoginComponent, VerificationCodeComponent, PaymentComponent, ContactUsComponent, ShoppingCartComponent, ChatBotComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caffeeNiaz';
  showChatBot: boolean = true;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      this.showChatBot = data['showChatBot'] ?? true;
    });
  }

}
