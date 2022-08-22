import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/app/Services/cart/cart.service';

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

  todayDate :any;
  startDate : any;
  endDate : any;
  calculatedRent :any;
  minEndDate:any;
  RentedDaysCount:any;
  diff:any;

  // Add to cart function
  abc(){
    // console.log("start date : "+this.startDate);
    // console.log("end date : "+this.endDate);
    
    // checking if the input fields are empty or not
    if (this.startDate != undefined && this.endDate != undefined) {
      // checking the differnce
      this.diff = this.dateDiff();
      this.calculatedRent = this.diff * this.pPrice;
      // console.log('this will be the rent for the selected dates : ' + this.calculatedRent);
    }

    // Adding to cart
    this.cartService.addcart(this.pId,this.calculatedRent,this.diff);
    
  }

  // function for converting date to YYYY-MM-dd for today date
  toDay(){
    this.todayDate = new Date();
    let year =  this.todayDate.getFullYear();
    let month =  this.todayDate.getMonth() + 1;
    let dt =  this.todayDate.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    this.todayDate = year + '-' + month + '-' + dt;
    // console.log(this.todayDate);
    
  }

  // Function for date differce
  dateDiff() {
    var date1 = new Date(this.startDate);
    var date2 = new Date(this.endDate);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.RentedDaysCount = Difference_In_Days+1;
    

    //To display the final no. of days (result)
    return Difference_In_Days+1;
  }

  checkRent(){
    let diff = this.dateDiff();
    this.calculatedRent = diff * this.pPrice;
    // console.log('this will be the rent for the selected dates : '+this.calculatedRent);
  }
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  //calling the date function 
  this.toDay();
  // Setting start date as today
  this.startDate = this.todayDate;
    
  }

}
