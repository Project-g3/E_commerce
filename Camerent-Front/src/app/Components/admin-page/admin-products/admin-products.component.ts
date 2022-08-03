import { Component, OnInit,EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/Services/http/http.service';
import { Products } from './admin-products.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products : Products[] | undefined;
  productsList : Products[] | undefined;

  // intializing variable for two way data binding with ngModel
  searchbyid = '';
  searchbyname = '';
  searchbycat = '';
  
  
    
  constructor(private httpObj : HttpService) { 
    
  }

  ngOnInit(): void {
    this.httpObj.getProducts()
    .subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data));
      this.productsList = this.products;
    })
    
  }

  
  

}
