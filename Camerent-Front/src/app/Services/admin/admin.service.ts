import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public adminService:HttpClient) { }

  addProduct(data:any)
  {
    this.adminService.post('http://localhost:3210/admin-dash/addProducts',{'product':data})
    .subscribe();
  }

}
