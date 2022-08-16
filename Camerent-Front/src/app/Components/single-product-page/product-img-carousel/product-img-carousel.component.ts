import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-img-carousel',
  templateUrl: './product-img-carousel.component.html',
  styleUrls: ['./product-img-carousel.component.css']
})
export class ProductImgCarouselComponent implements OnInit {

  @Input() product : any;
  

  // setting img in hover 
  mouseenter(i:any,mainImg:any){
    mainImg.src=i;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
