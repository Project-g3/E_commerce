import { Component, OnInit } from '@angular/core';
import { navData } from './nav-data';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  collapsed = false;
  navData = navData;
  constructor() { }

  ngOnInit(): void {
  }

}
