import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  public products: any = [];
  public tPrice !: number;
  public count :any=[];

  constructor(private cartService : CartService,) { }

  ngOnInit(): void {
    // get data on init
    this.cartService.getCartData(localStorage.getItem("userID"))
      .subscribe((res: any) => {
        // all data
        this.products = res.data;
        // total price
        this.tPrice = res.tPrice;
        // count for no.of days
        this.count=res.count;
        // console.log(this.count)
      }) 
  }
  
  // remove single item
  removeItem(item: any,ptPrice:any,count:any){
    // maping product array with current item passed to delete
    this.products.map(async(a: any, index: any) => {
      if (item.id === a.id) {
        this.products.splice(index, 1);
        this.tPrice=this.tPrice-ptPrice;
        console.log(this.tPrice)
        // console.log(ptPrice)
        // reqst to dlt item in database,reduce total price 
        await this.cartService.removeCart(count,this.tPrice,item._id,localStorage.getItem("userID"))
      }
    })

  }

  // empty cart and  price
  emptycart(){
    // clearing product array
    this.products = []
    // database
    this.cartService.removeAllCart(localStorage.getItem("userID"));
  }

  // update total price after every change
  // ngDoCheck(){
  //      this.cartService.getCartData(localStorage.getItem("userID"))
  //     .subscribe((res: any) => {
  //       this.tPrice = res.tPrice;
  //     })
  // }

  }


