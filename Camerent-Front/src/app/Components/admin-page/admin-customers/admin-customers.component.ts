import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin/admin.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {

  searchbyname = '';
  searchbyaddress = '';
  users : any;
  data : any;

  // Filter by Address
  filterByAdrs(){
    let text = this.searchbyaddress.trim().toLocaleLowerCase();
    let temp  = new Array;
    temp = this.data;

    
    // fileter by name
    if (text === '') {
      this.users = this.data;
    } else {
      this.users = [];
      temp.map((a) => {
        if (a.address.toLocaleLowerCase().includes(text)) {
          this.users.push(a);
        }
      })
    }


  }


  // Delete function
  userDelete(id:any){
    if (confirm('Are you sure you want to delete this User ?')) {
      console.log(id);
      // calling user delete service 
      this.adminServiceObj.deleteUser(id);
      alert('The user has been Successfully removed from Datbase');

      // refreshing the data in table again
      this.adminServiceObj.getCustomers()
        .subscribe(result => {
          this.users = JSON.parse(JSON.stringify(result));
        })
      
    }
  }

  constructor(private adminServiceObj : AdminService) { }

  ngOnInit(): void {
    this.adminServiceObj.getCustomers()
    .subscribe(result=>{
      this.users = JSON.parse(JSON.stringify(result));
      this.data = this.users;
    })
  }

}
