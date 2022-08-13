import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin/admin.service';

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.css']
})
export class UpdateProductModalComponent implements OnInit {

  @Input() singleData :any;

  // Function for update Single Product
  updateSingleProduct(formdata:any){
    
    let confirmStatus = confirm('Do you want to update these data to database ?');
    if(confirmStatus)
    { 
      let product = this.singleData;
      if(formdata.value.productName!=''){
        product.name = formdata.value.productName;
      }
      if(formdata.value.productPrice!=''){
        product.price = formdata.value.productPrice;
      }
      if(formdata.value.productCategory!=''){
        product.category = formdata.value.productCategory;
      }
      if(formdata.value.productBrand!=''){
        product.brand = formdata.value.productBrand;
      }
      if(formdata.value.shortDesc!=''){
        product.shortDesc = formdata.value.shortDesc;
      }
      if(formdata.value.longDesc!=''){
        product.desc = formdata.value.longDesc;
      }
      console.log(product._id,product.name,product.price,product.category,product.brand,product.shortDesc,product.desc);
      // this.router.navigate(['/admin-dashboard/products']);

      this.adminServiceObj.updateProduct(product);
      alert('The Successfully Updated to database');
      
    }
    


    
    
  }

 

  constructor(private router:Router,private adminServiceObj:AdminService) { }

  ngOnInit(): void {
    
  }

}
