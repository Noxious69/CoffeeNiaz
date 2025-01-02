import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  constructor() { }

  //  BASE API URL
  api_url = 'https://localhost:'

  // BASE API SECOND PART URL
  SECURITY_URL = this.api_url + '7091'
  CUSTOMER_URL = this.api_url + '7235'
  PRODUCT_URL = this.api_url + '7052'

  // SUB URL PARTS

  //SECURITY PART
  ADD_USER_URL = this.SECURITY_URL + '/addDefaultUser';
  ADMIN_LOGIN_URL = this.SECURITY_URL + '/adminlogin';

  //CUSTOMER PART
  SIGNUP_URL = this.CUSTOMER_URL + '/signup';
  SIGNIN_URL = this.CUSTOMER_URL + '/signin';

  //PRODUCT PART
  ADD_NEW_PRODUCT_URL = this.PRODUCT_URL + '/addNewProduct';
  ALL_PRODUCTS_URL = this.PRODUCT_URL + '/allProducts';
  EDIT_PRODUCTS_URL = this.PRODUCT_URL + '/editproduct';
  REMOVE_PRODUCTS_URL = this.PRODUCT_URL + '/removeproduct';
  SHOW_PHOTO_URL = this.PRODUCT_URL + '/showPhoto';
}
