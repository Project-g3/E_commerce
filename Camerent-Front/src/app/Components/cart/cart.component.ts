import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';
import { HttpService } from 'src/app/Services/http/http.service';
import { Products } from '../admin-page/admin-products/admin-products.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal !: number;

  constructor(private cartService : CartService, private http:HttpService) { }

  ngOnInit(): void {
    this.http.getCartData(localStorage.getItem("userID"))
      .subscribe((res: any) => {
        this.products = res
      }) 
  }
  
  removeItem(item: any){
   
    this.products.map(async(a: any, index: any) => {
      if (item.id === a.id) {
        this.products.splice(index, 1);
      }
      await this.http.removeCart(index,localStorage.getItem("userID"))
    })

  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  }


