import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/~Landing/landing-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from './auth/login/login.component';
import { VerificationCodeComponent } from './auth/verification-code/verification-code.component';

export const routes: Routes = [
    {path: 'home', component:LandingPageComponent},
    {path: '', redirectTo:'home' , pathMatch:'full'},


    {path:'login', component:LoginComponent},
    {path:'verify', component:VerificationCodeComponent},
    {path:'product', component:ProductPageComponent},
    {path:'contact', component:ContactUsComponent},
    {path:'payment', component:PaymentComponent},
    {path:'cart', component:ShoppingCartComponent},


    {path: '**', redirectTo:'home'},
];
