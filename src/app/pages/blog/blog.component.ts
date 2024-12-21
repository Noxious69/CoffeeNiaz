import { Component } from '@angular/core';
import {HeaderComponent} from "../../layout/header/header.component";
import {FooterComponent} from "../../layout/footer/footer.component";
import {BlogListComponent} from "./blog-list/blog-list.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BlogListComponent,
    RouterOutlet
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
