import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  cli(){
    console.log('clicked');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
