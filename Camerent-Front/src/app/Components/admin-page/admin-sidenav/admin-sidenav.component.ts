import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  Aclick(tag:any){
    
  }

  constructor() { }

  ngOnInit(): void {
    // sidenav click function
    {
      let order = document.getElementById('order');
    let dash = document.getElementById('dash');
    let products = document.getElementById('products');
    let customers = document.getElementById('customers');
    let staff = document.getElementById('staff');
    let setting = document.getElementById('setting');
    
    dash?.addEventListener('click',()=>{
      products?.classList.remove('Active');
      order?.classList.remove('Active');
      customers?.classList.remove('Active');
      staff?.classList.remove('Active');
      setting?.classList.remove('Active');
      dash?.classList.add('Active');
    })
    order?.addEventListener('click',()=>{
      dash?.classList.remove('Active');
      products?.classList.remove('Active');
      customers?.classList.remove('Active');
      staff?.classList.remove('Active');
      setting?.classList.remove('Active');
      order?.classList.add('Active');
    })
    products?.addEventListener('click',()=>{
      dash?.classList.remove('Active');
      order?.classList.remove('Active');
      customers?.classList.remove('Active');
      staff?.classList.remove('Active');
      setting?.classList.remove('Active');
      products?.classList.add('Active');
    })
    customers?.addEventListener('click',()=>{
      dash?.classList.remove('Active');
      order?.classList.remove('Active');
      products?.classList.remove('Active');
      staff?.classList.remove('Active');
      setting?.classList.remove('Active');
      customers?.classList.add('Active');
    })
    staff?.addEventListener('click',()=>{
      dash?.classList.remove('Active');
      order?.classList.remove('Active');
      customers?.classList.remove('Active');
      products?.classList.remove('Active');
      setting?.classList.remove('Active');
      staff?.classList.add('Active');
    })
    setting?.addEventListener('click',()=>{
      dash?.classList.remove('Active');
      order?.classList.remove('Active');
      customers?.classList.remove('Active');
      staff?.classList.remove('Active');
      products?.classList.remove('Active');
      setting?.classList.add('Active');
    })
    }
  }

}
