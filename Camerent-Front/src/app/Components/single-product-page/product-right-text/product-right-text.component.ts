import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-right-text',
  templateUrl: './product-right-text.component.html',
  styleUrls: ['./product-right-text.component.css']
})
export class ProductRightTextComponent implements OnInit {

  @Input()  pId :any;
  @Input()  pname : any;
  @Input()  pShortDesc : any;
  @Input()  pPrice : any;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor() { }

  ngOnInit(): void {
    
  }

}
