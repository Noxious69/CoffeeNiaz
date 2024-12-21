import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/~Landing/landing-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from './auth/login/login.component';
import { VerificationCodeComponent } from './auth/verification-code/verification-code.component';
import {BlogComponent} from "./pages/blog/blog.component";
// import * as path from "node:path";
import {BlogListComponent} from "./pages/blog/blog-list/blog-list.component";
import {BlogDetailComponent} from "./pages/blog/blog-detail/blog-detail.component";

export const routes: Routes = [
    {path: 'home', component:LandingPageComponent},
    {path: '', redirectTo:'home' , pathMatch:'full'},


    {path:'login', component:LoginComponent},
    {path:'verify', component:VerificationCodeComponent},
    {path:'product', component:ProductPageComponent},
    {path:'contact', component:ContactUsComponent},
    {path:'payment', component:PaymentComponent},
    {path:'cart', component:ShoppingCartComponent},
    {path:'blog', component:BlogComponent ,
      children:[
        {path: '', redirectTo:'list' , pathMatch:'full'},
        {path:'list' , component:BlogListComponent},
        {path:'details' , component:BlogDetailComponent},
        {path: '**', redirectTo:'list'},
      ]},


    {path: '**', redirectTo:'home'},
];
