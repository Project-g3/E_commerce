import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  wishStatus = false;

  cli(){
    this.router.navigate(['single-product'],{queryParams:{pID:this.item._id}});
  }
  towish(target:any){
    
    if(this.wishStatus){
      target.style = 'color:grey';
      this.wishStatus = false;
    }else{
      target.style = 'color:red';
      this.wishStatus = true; 
    }
  }
  item :any;

  @Input() data = new Array;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.item = this.data;
    
  }

}
