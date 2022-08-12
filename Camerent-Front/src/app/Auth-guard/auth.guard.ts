import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/Auth/auth.service';
import { ModalService } from '../Services/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService,private _modal:ModalService){}

  canActivate():boolean{
    // user check using jwt tokein in localStorage
  if(this._auth.loggedIn()){
    return true
  }else{
    this._modal.toggleModal('auth')
    return false
  }
  
}
}
