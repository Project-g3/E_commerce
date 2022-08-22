import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; //container for forms
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http/http.service';
import { ModalService } from 'src/app/Services/modal/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http:HttpService,private router:Router,private modal:ModalService){}

  // create new form fields
   name = new FormControl('', [
    //validators
      Validators.required,
      Validators.minLength(3)
    ]);
    email= new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    age= new FormControl('', [
      Validators.required,
      Validators.min(18),//min age 18
      Validators.max(100)//age limit to 100
    ]);
    password= new FormControl('',[
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
    ]);
    confirm_password= new FormControl('',[
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
    ]);
    phoneNumber= new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]);

    showAlert = false;
    alertMsg = 'Please wait! Your account is being Created!';
    alertColor = 'blue';
  
    // register
  registerForm = new FormGroup({
    name :this.name,
    email:this.email,
    age:this.age,
    password:this.password,
    phoneNumber:this.phoneNumber, 
    confirmPassword:this.confirm_password
  });

   async register(){
     if(this.registerForm.value.password===this.registerForm.value.confirmPassword){
      this.showAlert = true;
      //  registering user
      await this.http.registerAcc(this.registerForm.value)
      setTimeout(() => {
        // close modal
        this.modal.toggleModal('auth');
        // resetting form
        this.registerForm.reset();
        this.router.navigate(['home'])
        // resetting alert
        this.showAlert = false;
      }, 3000);
    }else{
      alert("Password do not match!")
    }
    
  }
}
