import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any = [];
  public tPrice !: number;

  constructor(private cartService : CartService,) { }

  ngOnInit(): void {
    // get data on init
    this.cartService.getCartData(localStorage.getItem("userID"))
      .subscribe((res: any) => {
        // all data
        this.products = res.data;
        // total price
        this.tPrice = res.tPrice;
      }) 
  }
  
  // remove single item
  removeItem(item: any){
    // maping product array with current item passed to delete
    this.products.map(async(a: any, index: any) => {
      if (item.id === a.id) {
        this.products.splice(index, 1);
        // reqst to dlt item in database
        await this.cartService.removeCart(item._id,localStorage.getItem("userID"))
      }
    })

  }
  emptycart(){
    // clearing product array
    this.products = []
    // database
    this.cartService.removeAllCart(localStorage.getItem("userID"));
  }

  }


