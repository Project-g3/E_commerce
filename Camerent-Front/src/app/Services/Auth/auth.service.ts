import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  // login call
  loginUser(data:any){
   return this.http.post<any>('http://localhost:3210/login',{'userData':data})
  }

// checking if a user is logged inn by gettin token and converting it to boolean( !! )
  loggedIn(){
    return !!localStorage.getItem('token');
  }
// checking admin setted in the localStorage is true/false
  adminIn(){
      if (!!localStorage.getItem('token') && localStorage.getItem('admin') === 'true') {
        return true
      } else {
        return false
      }
  }
// getting the token value
  getToken(){
    return localStorage.getItem('token');
  }
}
