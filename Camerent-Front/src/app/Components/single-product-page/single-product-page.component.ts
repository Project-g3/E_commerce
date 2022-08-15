import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http/http.service';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.css']
})
export class SingleProductPageComponent implements OnInit {

  pId : any;
  SingleProdList:any;

  // For right section component
  pname : String ='';
  pShortDesc : String = '';
  pPrice : any;


  
  constructor(private router:ActivatedRoute,private httpObj:HttpService) { }

  ngOnInit(): void {

    // Accessing Product Id from URL using query parameter
    this.router.queryParams
      .subscribe(params => {
        this.pId = params; //saving it to a variable
        this.pId = this.pId.pID;
      })

    // Accessing single product list from server
    this.httpObj.getSingleProduct(this.pId)
    .subscribe((result)=>{
      this.SingleProdList = result;
      this.SingleProdList = this.SingleProdList[0];

      //Setting data to variables 
      this.pname = this.SingleProdList.name;
      this.pShortDesc = this.SingleProdList.shortDesc;
      this.pPrice = this.SingleProdList.price;
    });
    
    

  }

}


