import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http/http.service';
import { Products } from './admin-products.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  productsList : Products[] | undefined;

  constructor(private httpObj : HttpService) { }

  ngOnInit(): void {

    this.httpObj.getProducts()
    .subscribe((data)=>{
      this.productsList = JSON.parse(JSON.stringify(data));
      console.log(this.productsList);
    })
  }

  
  

}
