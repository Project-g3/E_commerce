import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent  {
  address ={
    line1:'',
    line2:'',
    zipCode:'',
    city:''
  }

  constructor() { }
  
  save(){
    console.log(this.address)
  }

}
