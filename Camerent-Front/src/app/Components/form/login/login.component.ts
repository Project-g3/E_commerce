import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';

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

  constructor(private _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this._auth.loginUser(this.credentials)
    .subscribe((res)=>{
      localStorage.setItem('token',res.token)
      this.router.navigate(['home'])
    })
  }
 
}
