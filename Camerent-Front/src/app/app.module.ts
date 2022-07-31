import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

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
import { AdminSidenavComponent } from './Components/admin-page/admin-sidenav/admin-sidenav.component';
import { NavbarComponent } from './Components/Common/navbar/navbar.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { FooterComponent } from './Components/Common/footer/footer.component';

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
    AdminCategoryComponent,
    AdminSidenavComponent,
    NavbarComponent,
    ProductsPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
