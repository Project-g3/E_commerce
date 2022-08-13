import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { TermsComponent }  from './Components/terms/terms.component';
import { AdminCategoryComponent } from './Components/admin-page/admin-category/admin-category.component';
import { AdminCustomersComponent } from './Components/admin-page/admin-customers/admin-customers.component';
import { AdminDashComponent } from './Components/admin-page/admin-dash/admin-dash.component';
import { AdminOrdersComponent } from './Components/admin-page/admin-orders/admin-orders.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { AdminProductsComponent } from './Components/admin-page/admin-products/admin-products.component';
import { AdminSettingsComponent } from './Components/admin-page/admin-settings/admin-settings.component';
import { AdminStaffComponent } from './Components/admin-page/admin-staff/admin-staff.component';
import { CarouselHeadComponent } from './Components/homepage/carousel-head/carousel-head.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { SingleProductPageComponent } from './Components/single-product-page/single-product-page.component';
import { AccountSettingsComponent } from './Components/user/account-settings/account-settings.component';
import { AddressComponent } from './Components/user/address/address.component';
import { MyOrdersComponent } from './Components/user/my-orders/my-orders.component';
import { ProofVeriComponent } from './Components/user/proof-veri/proof-veri.component';
import { UserSideComponent } from './Components/user/user-side/user-side.component';

const routes: Routes = [
  {path:'',component:CarouselHeadComponent},
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
  ]},

  {path:'about',component:AboutusComponent},
  {path:'terms',component:TermsComponent},

  {path: 'user', component: UserSideComponent,
    children: [
      { path: '', component: AccountSettingsComponent },
      { path: 'myorders', component: MyOrdersComponent },
      { path: 'address', component: AddressComponent },
      { path: 'proof-vali', component: ProofVeriComponent },
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
