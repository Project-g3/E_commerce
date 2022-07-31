import { Component, OnInit } from '@angular/core';
import { footerData } from './footer.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerNav = footerData;

  constructor() { }

  ngOnInit(): void {
  }

}
