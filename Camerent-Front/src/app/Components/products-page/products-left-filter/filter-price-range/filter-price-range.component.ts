import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-price-range',
  templateUrl: './filter-price-range.component.html',
  styleUrls: ['./filter-price-range.component.css']
})
export class FilterPriceRangeComponent implements OnInit {

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }


  constructor() { }

  ngOnInit(): void {

    

  }

}
