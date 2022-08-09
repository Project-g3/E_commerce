import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.css']
})
export class UpdateProductModalComponent implements OnInit {

  @Input() id :any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.id);
  }

}
