import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //container for forms
import { HttpService } from 'src/app/Services/http/http.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public userDetails:any ;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getUser(localStorage.getItem('userID'))
    .subscribe((res)=>{
      this.userDetails = res;
    })
  }
  
  // create new form fields
  name = new FormControl('', [
    //validators
    Validators.required,
    Validators.minLength(3)
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),//min age 18
    Validators.max(100)//age limit to 100
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);

  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10)
  ]);

   newData = new FormGroup({
    name: this.name,
    email:this.email,
    password:this.password,
    age:this.age,
    phoneNumber:this.phoneNumber
  })


  async change(){
    await this.http.updateAcc(this.newData.value)
    setTimeout(() => {
      alert("Changed")
    },1000);
  }

}
