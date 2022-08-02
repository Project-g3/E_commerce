import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        
  
      }else{
        console.log('false');
      }
    }else{
      alert('Fill all the field before submitting !');
    }
  }

  
  constructor(private httpserobj:HttpService,private router:Router) { }


  ngOnInit(): void {
  }

}