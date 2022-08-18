import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-brand',
  templateUrl: './filter-brand.component.html',
  styleUrls: ['./filter-brand.component.css']
})
export class FilterBrandComponent implements OnInit {
  brands = ['Canon','Sony','Nikon','Fujifilm','Panasonic','PENTAX'];

  checks = new Array;

  ch(item:any){
    this.checks.push(item);
    console.log(this.checks);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
