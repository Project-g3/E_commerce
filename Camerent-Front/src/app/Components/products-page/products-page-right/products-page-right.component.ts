import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http/http.service';

@Component({
  selector: 'app-products-page-right',
  templateUrl: './products-page-right.component.html',
  styleUrls: ['./products-page-right.component.css']
})
export class ProductsPageRightComponent implements OnInit {
  products:any;
  component:any;

  lowToHigh(){
    // alert('low to high working');
    this.products = this.products.sort((a,b)=> a.price - b.price)
    
  }
  highToLow(){
    this.products = this.products.sort((a,b)=> b.price - a.price)
  }
  // Filter by brand
  filterByBrand(){
    alert('brand filter');
  }

  constructor(private httpObj : HttpService) { }

  ngOnInit(): void {
    this.httpObj.getProducts()
    .subscribe((data)=>{
      this.products = data;
    })
  }

}
