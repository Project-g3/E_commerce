import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }


  getProducts(){
    return this.http.get('http://localhost:3210/admin-dash');
  }

  // get single product
  getSingleProduct(pid:any){
    return this.http.get(`http://localhost:3210/admin-dash/${pid}`);
  }
  
  
  // register new account
  registerAcc(data:any){
    this.http.post('http://localhost:3210/register',{'user': data})
      .subscribe()
  }

  // add to cart
  addcart(pID:any){
    let cart={
      "userID": localStorage.getItem('userID'),
      "pID":pID,
    }
    // console.log(cart)
    // to be updated in database
    this.http.post('http://localhost:3210/cart',{'cart':cart})
    .subscribe()
  }

  // get cart data
  getCartData(id:any){
    return this.http.get(`http://localhost:3210/cart/${id}`)
  }

  // remove
  removeCart(id:any,userID:any){
    return this.http.post(`http://localhost:3210/cart/`,{'index':id,'userID':userID})
  }
}
