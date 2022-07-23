import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDashComponent } from './Components/admin-page/admin-dash/admin-dash.component';
import { AdminProductsComponent } from './Components/admin-page/admin-products/admin-products.component';
import { AdminOrdersComponent } from './Components/admin-page/admin-orders/admin-orders.component';
import { AdminCustomersComponent } from './Components/admin-page/admin-customers/admin-customers.component';
import { AdminSettingsComponent } from './Components/admin-page/admin-settings/admin-settings.component';
import { AdminStaffComponent } from './Components/admin-page/admin-staff/admin-staff.component';
import { AdminCategoryComponent } from './Components/admin-page/admin-category/admin-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    AdminDashComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminCustomersComponent,
    AdminSettingsComponent,
    AdminStaffComponent,
    AdminCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
