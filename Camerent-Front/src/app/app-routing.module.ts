import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoryComponent } from './Components/admin-page/admin-category/admin-category.component';
import { AdminCustomersComponent } from './Components/admin-page/admin-customers/admin-customers.component';
import { AdminDashComponent } from './Components/admin-page/admin-dash/admin-dash.component';
import { AdminOrdersComponent } from './Components/admin-page/admin-orders/admin-orders.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { AdminProductsComponent } from './Components/admin-page/admin-products/admin-products.component';
import { AdminSettingsComponent } from './Components/admin-page/admin-settings/admin-settings.component';
import { AdminStaffComponent } from './Components/admin-page/admin-staff/admin-staff.component';
import { NavbarComponent } from './Components/Common/navbar/navbar.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { SingleProductPageComponent } from './Components/single-product-page/single-product-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'products',component:ProductsPageComponent},
  {path:'single-product',component:SingleProductPageComponent},
  {path:'admin-dashboard',component:AdminPageComponent,
  children:[
    {path:'',component:AdminDashComponent},
    {path:'orders',component:AdminOrdersComponent},
    {path:'category',component:AdminCategoryComponent},
    {path:'settings',component:AdminSettingsComponent},
    {path:'staff',component:AdminStaffComponent},
    {path:'customers',component:AdminCustomersComponent},
    {path:'products',component:AdminProductsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
