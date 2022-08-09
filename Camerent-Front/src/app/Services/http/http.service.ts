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

  registerAcc(data:any){
    this.http.post('http://localhost:3210/register',{"user":data})
    .subscribe()
  }
}
