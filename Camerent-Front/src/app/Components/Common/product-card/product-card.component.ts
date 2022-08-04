import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  cli(){
    console.log('clicked');
    this.router.navigate(['single-product']);
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
