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
  allproducts:any;

  wishStatus = false;

  // For right section component
  pname : String ='';
  pShortDesc : String = '';
  pPrice : any;

  // adding to wishlist
  towish(target:any){
    
    
    if(this.wishStatus){
      target.style = 'color:grey';
      this.wishStatus = false;
    }else{
      target.style = 'color:red';
      this.wishStatus = true; 
    }
  }

  goToPro(id:any){
    // console.log(id);
    this.route.navigate(['single-product'],{queryParams:{pID:id}});

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


  
  constructor(private router:ActivatedRoute,private httpObj:HttpService,private route:Router) { }

  ngOnInit(): void {
    // accessing all product from database
    this.httpObj.getProducts().subscribe((result)=>{
      this.allproducts = JSON.parse(JSON.stringify(result));
    })

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


