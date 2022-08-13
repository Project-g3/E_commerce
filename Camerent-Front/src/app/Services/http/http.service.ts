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
  addcart(id:any){
    // to be updated in database
    // console.log(id)
  }
}
