import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { HttpService } from 'src/app/Services/http/http.service';
import { Products } from '../admin-products.model';

@Component({
  selector: 'app-add-products-modal',
  templateUrl: './add-products-modal.component.html',
  styleUrls: ['./add-products-modal.component.css']
})
export class AddProductsModalComponent implements OnInit {
  add(data:any){
    let text = "Do you want to add the product";

    if(data.status=='VALID'){
      if(confirm(text)==true){
        console.log('true');
        console.log(data.value,data);
        this.adminServiceObj.addProduct(data.value);
        alert('Data stored to database');
        this.router.navigate(['/admin-dashboard/products'])
  
      }else{
        console.log('false');
      }
    }else{
      alert('Fill all the field before submitting !');
    }
  }

  
  constructor(private httpserobj:HttpService,private adminServiceObj: AdminService ,private router:Router) { }


  ngOnInit(): void {

    
  }

}
