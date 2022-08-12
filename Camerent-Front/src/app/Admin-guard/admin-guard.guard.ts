import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';
import { ModalService } from 'src/app/Services/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private _auth: AuthService, private modal: ModalService,private router:Router){}
  canActivate():boolean{
    // for checking if admin feature is true
    if (this._auth.adminIn()) {
      return true
    } else {
      // redirect to home with login/signup modal open
      this.router.navigate(["home"])
      this.modal.toggleModal('auth')
      return false
    }
  
  }
}
