import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HeroPartComponent } from "./pages/~Landing/hero-part/hero-part.component";
import { BestSellesComponent } from "./pages/~Landing/best-selles/best-selles.component";
import { CategoryComponent } from "./pages/~Landing/category/category.component";
import { BlogComponent } from "./pages/~Landing/blog/blog.component";
import { LandingPageComponent } from "./pages/~Landing/landing-page.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";
import { LoginComponent } from "./auth/login/login.component";

  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroPartComponent, BestSellesComponent, CategoryComponent, BlogComponent, LandingPageComponent, ProductPageComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caffeeNiaz';

  
}
