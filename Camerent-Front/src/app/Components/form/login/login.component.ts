import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { ModalService } from 'src/app/Services/modal/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  }

  constructor(private _auth:AuthService, private router:Router, private modal:ModalService) { }

  ngOnInit(): void {
  }

  login(){
    // login 
    this._auth.loginUser(this.credentials)
    .subscribe((res)=>{
      // token stoting
      localStorage.setItem('token',res.token)
      localStorage.setItem('admin',res.isadmin)
      // simple timeout for a delay
      setTimeout(() => {
        setTimeout(() => {
          this.router.navigate(['/home'])
          // reseting form
          this.credentials= {
            email: '',
            password: ''
          }
        }, 1500);
        // closing modal
        this.modal.toggleModal('auth')

      }, 1000);
    
    })
  }
 
}
