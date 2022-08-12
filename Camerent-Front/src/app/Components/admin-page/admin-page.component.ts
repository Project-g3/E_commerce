import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { navData } from './nav-data';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private _auth:AuthService){}
  collapsed = false;
  navData = navData;

  ngOnInit(): void {
  }

  logout($event:Event){
    $event.preventDefault();
    this._auth.logoutUser();
  }
}
