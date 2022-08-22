import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './Admin-guard/admin-guard.guard';
import { AuthGuard } from './Auth-guard/auth.guard';
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
import { CartComponent } from './Components/cart/cart.component';
import { CarouselHeadComponent } from './Components/homepage/carousel-head/carousel-head.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { SingleProductPageComponent } from './Components/single-product-page/single-product-page.component';
import { AccountSettingsComponent } from './Components/user/account-settings/account-settings.component';
import { AddressComponent } from './Components/user/address/address.component';
import { MyOrdersComponent } from './Components/user/my-orders/my-orders.component';
import { ProofVeriComponent } from './Components/user/proof-veri/proof-veri.component';
import { UserSideComponent } from './Components/user/user-side/user-side.component';
import { PaymentComponent } from './Components/user/payment/payment.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  {
    path:'home',
    component:CarouselHeadComponent,
    title:'Camerent'
  },
  {
    path:'products',
    component:ProductsPageComponent,
    title: 'Camerent-Products'
  },

  {
    path:'single-product',
    component:SingleProductPageComponent,
    title: 'Camerent-Products'
  },
  { path: 'cart', 
    component: CartComponent,
    canActivate:[AuthGuard],
    title:'Camerent-Cart' 
},
  {
    path:'admin-dashboard',
    // guard for admin
    canActivate:[AdminGuardGuard] ,
    component:AdminPageComponent,
    title: 'Camerent-Admin',
  children:[
    {
      path:'',
      component:AdminDashComponent,
    },
    {
      path:'orders',
      component:AdminOrdersComponent,
      title: 'Camerent-Admin-Order'
    },
    {
      path:'category',
      component:AdminCategoryComponent,
      title: 'Camerent-Admin-Catagory'
    },
    {
      path:'settings',
      component:AdminSettingsComponent,
      title: 'Camerent-Admin-Settings'
    },
    {
      path:'staff',
      component:AdminStaffComponent,
      title: 'Camerent-Admin-Staff'
    },
    {
      path:'customers',
      component:AdminCustomersComponent,
      title: 'Camerent-Admin-Customers'
    },
    {
      path:'products',
      component:AdminProductsComponent,
      title: 'Camerent-Admin-Products'
    }
  ]},
  {
    path:'terms',
    component:TermsComponent,
    title:'Camerent-T&C'
  },
  {
    path:'about',
    component:AboutusComponent,
    title: 'Camerent-About'
  },
  {
    path: 'user',
  // guard for users
    component: UserSideComponent,
    canActivate: [AuthGuard],
    title: 'Camerent-User',
    children: [
      { 
        path: '',
        component: AccountSettingsComponent,
      },
      { 
        path: 'myorders', 
        component: MyOrdersComponent,
        title: 'Camerent-My Orders'
      },
      { 
        path: 'address', 
        component: AddressComponent,
        title: 'Camerent-User Address'
      },
      { 
        path: 'proof-vali', 
        component: ProofVeriComponent,
        title: 'Camerent-User Proof'
      },
      {
        path: 'payment',
        component: PaymentComponent,
        title: 'Camerent-User Payment'
      },
  ]},
  // wildcard route - basic used for 404
  // { 
  //   path: "**", 
  //   component: CarouselHeadComponent 
  // },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
