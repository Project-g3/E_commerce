import { Component, OnInit,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { HttpService } from 'src/app/Services/http/http.service';
import { Products } from './admin-products.model';




@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  // intializing variable for two way data binding with ngModel
  searchbyid = '';
  searchbyname = '';
  searchbycat = '';

  productsList : any;
  products :any;
  updateItem : any;


  // category 
  category=[
    'DSLR',
    'asd',
    'ds'
  ]

// search filter
  searchFilter(name:any){
    let text = this.searchbyname.trim().toLocaleLowerCase();
    let temp  = new Array;
    temp = this.products;
    
    // fileter by name
    if(name.id==='searchName'){
      console.log('filter by name')
      if (text === '') {
        this.productsList = this.products;
      } else {
        this.productsList = [];

        temp.map((a) => {
          if (a.name.toLocaleLowerCase().includes(text)) {
            this.productsList.push(a);
          }
        })

      }
      // filter by category 
    }else if(name.id==='searchCategory'){
      let text = this.searchbycat.trim().toLocaleLowerCase();
      console.log('category filter');
      if (text === '') {
        this.productsList = this.products;
      } else {
        this.productsList = [];

        temp.map((a) => {
          if (a.category.toLocaleLowerCase().includes(text)) {
            this.productsList.push(a);
          }
        })

      }
    }
    
  }
// updateModal passing data
  updatefun(datas:any){
    this.updateItem = datas;
    console.log(this.updateItem);
  }
// delete single product from database
  deleteFunc(id:any){ 
    let result = confirm('Are you sure, you want to delete this item from the database ?');

    if(result){
      this.adminServiceObj.deleteProduct(id);
      alert('data has been succesfully deleted');
      
      // setting the data again
      this.httpObj.getProducts()
        .subscribe((data) => {
          this.products = JSON.parse(JSON.stringify(data));
          this.productsList = this.products;
        })
    }

  }

  // For refreshing the table
  refresh(){
    this.httpObj.getProducts()
    .subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data));
      this.productsList = this.products;
    })
  }


  
  
    
  constructor(private httpObj : HttpService,private adminServiceObj : AdminService) { 
    
  }

  ngOnInit(): void {
    this.httpObj.getProducts()
    .subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data));
      this.productsList = this.products;
    })
    
  }

  
  

}
