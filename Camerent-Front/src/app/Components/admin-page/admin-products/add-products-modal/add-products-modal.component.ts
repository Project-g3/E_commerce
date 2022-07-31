import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products-modal',
  templateUrl: './add-products-modal.component.html',
  styleUrls: ['./add-products-modal.component.css']
})
export class AddProductsModalComponent implements OnInit {
  add(){
    confirm("Do you want to add the product");
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
