import { Component, OnInit,EventEmitter } from '@angular/core';
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
  updateId : any;


  // category 
  category=[
    'DSLR',
    'asd',
    'ds'
  ]

  // function for searching by category
  // searchByCategory(value:any){
  //   this.products.forEach((a:any)=>{
      
  //     if(a.category===value){
  //       this.products.push(a);
  //       console.log(a);
  //     }

  //   })
  //   this.productsList = this.products
  // }

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
  
  updatefun(id:any){
    this.updateId = id;
    console.log(this.updateId);
  }





  
  
    
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
