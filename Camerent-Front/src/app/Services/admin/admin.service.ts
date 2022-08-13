import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public adminService:HttpClient) { }

  // add product to database 
  addProduct(data:any)
  {
    this.adminService.post('http://localhost:3210/admin-dash/addProducts',{'product':data})
    .subscribe();
  }
  // Update product from data base
  updateProduct(data:any){
    this.adminService.post('http://localhost:3210/admin-dash/updateProduct',{'product':data})
    .subscribe();
  }
  // delete product from database
  deleteProduct(pId:any){
    this.adminService.post('http://localhost:3210/admin-dash/deleteProduct',{'pId':pId})
    .subscribe();
  }

}
