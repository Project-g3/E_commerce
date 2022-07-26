import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems = [
    { name:'Home',link:'' },
    { name:'Camera',link:'Products' },
    { name:'Accesories',link:'accesories' },
    { name:'About',link:'about' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
