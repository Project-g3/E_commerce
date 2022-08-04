import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-right-text',
  templateUrl: './product-right-text.component.html',
  styleUrls: ['./product-right-text.component.css']
})
export class ProductRightTextComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor() { }

  ngOnInit(): void {
    
  }

}
