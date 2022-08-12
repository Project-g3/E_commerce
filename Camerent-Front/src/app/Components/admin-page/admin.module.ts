import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminPageComponent } from './admin-page.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminStaffComponent } from './admin-staff/admin-staff.component';
import { RouterModule } from '@angular/router';
import { AddProductsModalComponent } from './admin-products/add-products-modal/add-products-modal.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductModalComponent } from './admin-products/update-product-modal/update-product-modal.component';





@NgModule({
  declarations: [
    AdminPageComponent,
    AdminDashComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminCustomersComponent,
    AdminSettingsComponent,
    AdminStaffComponent,
    AdminCategoryComponent,
    AdminSidenavComponent,
    AddProductsModalComponent,
    UpdateProductModalComponent
  ],
  imports: [
     CommonModule,
     RouterModule,
     FormsModule  
  ],
  exports:[
    AdminPageComponent,
  ]
})
export class AdminModule { }
