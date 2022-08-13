import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin/admin.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {

  users : any;

  constructor(private adminServiceObj : AdminService) { }

  ngOnInit(): void {
    this.adminServiceObj.getCustomers()
    .subscribe(result=>{
      this.users = JSON.parse(JSON.stringify(result));
      console.log(this.users);
    })
  }

}
