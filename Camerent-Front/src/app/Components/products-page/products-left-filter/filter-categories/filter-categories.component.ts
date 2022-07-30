import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.css']
})
export class FilterCategoriesComponent implements OnInit {
  category = ['Action Camera','Video Camera','Cenematic Camera']
  constructor() { }

  ngOnInit(): void {
  }

}
