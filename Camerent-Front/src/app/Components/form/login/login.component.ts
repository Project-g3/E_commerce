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
      if(res.token){
      // token stoting
      localStorage.setItem('token',res.token);
      localStorage.setItem('userID',res.userID);
        // simple timeout for a delay
        setTimeout(() => {

          // reseting form
          this.credentials = {
            email: '',
            password: ''
          }
          // closing modal
          this.modal.toggleModal('auth')

        }, 200);
      }

      if(res.invalid){
        alert(res.invalid)
      }
      if (res.isadmin) {
        localStorage.setItem('admin', res.isadmin);
        this.router.navigate(['admin-dashboard'])
      } else {
        this.router.navigate(['/home'])
      }
      
    
    })
  }
 
}
