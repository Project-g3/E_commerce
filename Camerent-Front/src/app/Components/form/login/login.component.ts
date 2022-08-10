import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http/http.service';

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

  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }

  login(){
    this.http.login(this.credentials);
  }

}
