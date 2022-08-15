import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-img-carousel',
  templateUrl: './product-img-carousel.component.html',
  styleUrls: ['./product-img-carousel.component.css']
})
export class ProductImgCarouselComponent implements OnInit {

  @Input() product : any;
  
  array = [
  {
    imgurl:'cam1.jpeg',
    index:1
  },
  {
    imgurl:'cam2.jpeg',
    index:2
  },
  {
    imgurl:'cam3.jpeg',
    index:3
  },
  {
    imgurl:'cam4.jpeg',
    index:4
  },
  {
    imgurl:'cam5.jpeg',
    index:5
  }
  
];

  // setting img in hover 
  mouseenter(i:any,mainImg:any){
    mainImg.src=i;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
