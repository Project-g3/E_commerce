import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getUser(id:any){
    return this.http.get(`http://localhost:3210/user/getUser/${id}`)
  }


  // update account
  updateAcc(data: any) {
    this.http.post('http://localhost:3210/user/update', { 'newData': data ,'userID':localStorage.getItem('userID')})
      .subscribe()
  }

}
