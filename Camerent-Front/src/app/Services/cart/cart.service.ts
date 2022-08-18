import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http:HttpClient) { }

  // add to cart
  addcart(pID: any,pPrice:any) {
    let cart = {
      "userID": localStorage.getItem('userID'),
      "pID": pID,
      "tPrice":pPrice
    }
    // to be updated in database
    this.http.post('http://localhost:3210/cart', { 'cart': cart })
      .subscribe()
  }

  // get cart data
  getCartData(id: any) {
    return this.http.get(`http://localhost:3210/cart/${id}`)
  }

  // remove single item
  removeCart(pId: any, userID: any) {
    return this.http.post(`http://localhost:3210/cart/delete`, { 'pId': pId, 'userID': userID })
      .subscribe()
  }
  // remove all items
  removeAllCart(userID: any) {
    this.http.post(`http://localhost:3210/cart/deleteall`, { 'userID': userID })
      .subscribe()
  }
}
