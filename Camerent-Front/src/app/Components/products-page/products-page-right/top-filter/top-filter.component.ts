import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-filter',
  templateUrl: './top-filter.component.html',
  styleUrls: ['./top-filter.component.css']
})
export class TopFilterComponent implements OnInit {


  @Output() lowToHigh = new EventEmitter;
  @Output() highToLow = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }

  lowTohigh(){
    this.lowToHigh.emit();
  }
  highTolow(){
    this.highToLow.emit();
  }

}
