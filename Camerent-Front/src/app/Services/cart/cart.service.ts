import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any[]=[];

  // behavioursubject emmit data and subscribe data. observable. need to iniialise
  public productList = new BehaviorSubject<any>([]);

  public search = new BehaviorSubject<string>("");


  constructor(private http:HttpService) { }

  // send data 
  getProducts(id:any){
    this.http.getCartData(id)
    .subscribe((res:any)=>{
      this.productList.next(res.product);
    })
    return this.productList.asObservable();
  }

  // get data and emit data by next()
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }


// add to cart and emmit cartItemList and total price
  async addtoCart (_id : any){
    // await this.http.getSingleProduct(_id)
    // .subscribe(async (res) => {
    //   let [product]:any = res
      await this.http.addcart(_id);
      
      // this.cartItemList.push(product);
      // this.productList.next(product);
      // this.getTotalPrice();
      // console.log(this.cartItemList)
  // })
}


//  total price 
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  // remove
  removeCartItem(product: any){
    
    // update live no. cart item no.
    this.productList.next(this.cartItemList);
  }

  // remove all
  removeAllCart(){
    this.cartItemList = []
    
    // update live no. cart item no.
    this.productList.next(this.cartItemList);
  }
}
