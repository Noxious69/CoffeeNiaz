import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landing-blog',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './landing-blog.component.html',
  styleUrl: './landing-blog.component.css'
})
export class LandingBlogComponent {

}
