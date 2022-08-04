import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-img-carousel',
  templateUrl: './product-img-carousel.component.html',
  styleUrls: ['./product-img-carousel.component.css']
})
export class ProductImgCarouselComponent implements OnInit {
  array = new Array(4);
  constructor() { }

  ngOnInit(): void {
  }

}
