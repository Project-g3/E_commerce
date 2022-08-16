import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-user-side',
  templateUrl: './user-side.component.html',
  styleUrls: ['./user-side.component.css']
})
export class UserSideComponent implements OnInit {
 
  constructor(public _auth:AuthService) {}
  ngOnInit(): void {}

}
