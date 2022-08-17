import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http/http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  homeProduct: any =[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getProducts()
    .subscribe((res)=>{
      this.homeProduct=res;
    })
  }

}
