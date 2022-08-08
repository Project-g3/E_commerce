import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.css']
})
export class SingleProductPageComponent implements OnInit {

  pId : any;
  
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.router.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        // this.pId = params.pID;
        // console.log(this.orderby); // price
      })
  }

}
