import { Component } from '@angular/core';
import { ProductPictureGalleryComponent } from "./product-picture-gallery/product-picture-gallery.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductPictureGalleryComponent, ProductDetailsComponent, HeaderComponent, FooterComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

}
