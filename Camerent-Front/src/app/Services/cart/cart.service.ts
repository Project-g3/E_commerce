import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http:HttpClient) { }

  // add to cart
  addcart(pID: any, calculatedRent:any,pNo:any) {
    let cart = {
      "userID": localStorage.getItem('userID'),
      "pID": pID,
      "calculatedRent": calculatedRent,
      "count":pNo
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
  removeCart(count:any,tPrice:number,pId: any, userID: any) {
    return this.http.post(`http://localhost:3210/cart/delete`, { 'count':count,'tPrice':tPrice,'pId': pId, 'userID': userID })
      .subscribe()
  }
  // remove all items
  removeAllCart(userID: any) {
    this.http.post(`http://localhost:3210/cart/deleteall`, { 'userID': userID })
      .subscribe()
  }
}
