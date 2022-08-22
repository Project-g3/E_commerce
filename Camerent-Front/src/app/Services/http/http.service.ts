import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  serverUrl = 'https://camerent-g3-backend.herokuapp.com';
  constructor(public http:HttpClient) { }


  getProducts(){
    return this.http.get(this.serverUrl+'/admin-dash');
  }

  // get single product
  getSingleProduct(pid:any){
    return this.http.get(this.serverUrl+`/admin-dash/${pid}`);
  }
  
  
  // register new account
  registerAcc(data:any){

    this.http.post(this.serverUrl+'/register',{'user': data})
      .subscribe()

  }

  getUser(id:any){
    return this.http.get(this.serverUrl+`/user/getUser/${id}`)
  }


  // update account
  updateAcc(data: any) {
    this.http.post(this.serverUrl+'/user/update', { 'newData': data ,'userID':localStorage.getItem('userID')})
      .subscribe()
  }

}
