import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = 'https://camerent-g3-backend.herokuapp.com';
  constructor(private http:HttpClient, private _router:Router) { }
  // login call
  loginUser(data:any){
   return this.http.post<any>(this.serverUrl+'/login',{'userData':data})
  }

// checking if a user is logged inn by gettin token and converting it to boolean( !! )
  loggedIn(){
    return !!localStorage.getItem('token');
  }

// router
  logoutUser() {
    localStorage.removeItem('userID')
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    this._router.navigate(['home'])
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
