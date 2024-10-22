import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/~Landing/landing-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    {path: 'home', component:LandingPageComponent},
    {path: '', redirectTo:'home' , pathMatch:'full'},

    {path:'product', component:ProductPageComponent},
    {path:'contact', component:ContactUsComponent},
    {path:'payment', component:PaymentComponent},
    {path:'cart', component:ShoppingCartComponent},


    {path: '**', redirectTo:'home'},
];
