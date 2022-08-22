import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  serverUrl = 'https://camerent-g3-backend.herokuapp.com';
  constructor(public adminService:HttpClient) { }

  // add product to database 
  addProduct(data:any)
  {
    this.adminService.post(this.serverUrl+'/addProducts',{'product':data})
    .subscribe();
  }
  // Update product from data base
  updateProduct(data:any){
    this.adminService.post(this.serverUrl+'/updateProduct',{'product':data})
    .subscribe();
  }
  // delete product from database
  deleteProduct(pId:any){
    this.adminService.post(this.serverUrl+'/deleteProduct',{'pId':pId})
    .subscribe();
  }



  // For getting users from backend
  getCustomers(){
    return this.adminService.get(this.serverUrl+'/admin-dash/customers');
  }


  // For deleting user/customer from database
  deleteUser(id:any){
   return this.adminService.post(this.serverUrl+'/admin-dash/deleteUser',{userid:id})
   .subscribe();
  }

}
