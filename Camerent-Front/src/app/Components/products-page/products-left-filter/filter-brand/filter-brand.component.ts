import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-brand',
  templateUrl: './filter-brand.component.html',
  styleUrls: ['./filter-brand.component.css']
})
export class FilterBrandComponent implements OnInit {
  brands = ['Canon','Sony','Nikon','Fujifilm','Panasonic','PENTAX'];
  constructor() { }

  ngOnInit(): void {
  }

}
