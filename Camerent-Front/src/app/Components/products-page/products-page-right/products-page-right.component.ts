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
  constructor(private httpObj : HttpService) { }

  ngOnInit(): void {
    this.httpObj.getProducts()
    .subscribe((data)=>{
      this.products = data;
    })
  }

}
