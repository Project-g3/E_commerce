import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'app-product-right-text',
  templateUrl: './product-right-text.component.html',
  styleUrls: ['./product-right-text.component.css']
})
export class ProductRightTextComponent implements OnInit {

  @Input()  pId :any;
  @Input()  pname : any;
  @Input()  pShortDesc : any;
  @Input()  pPrice : any;

  startDate : any;
  endDate : any;


  abc(){
    console.log("start date : "+this.startDate);
    console.log("end date : "+this.endDate);
    this.cartService.addtoCart(this.pId);
  }
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    
  }

   addtocart(){
    // console.log("product added")
    // this.cartService.addtoCart(item);
  }

}
