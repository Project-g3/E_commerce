import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Angular modules
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
// **************************

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
import { ProductsLeftFilterComponent } from './Components/products-page/products-left-filter/products-left-filter.component';
import { ProductsPageRightComponent } from './Components/products-page/products-page-right/products-page-right.component';
import { FilterCategoriesComponent } from './Components/products-page/products-left-filter/filter-categories/filter-categories.component';
import { FilterPriceRangeComponent } from './Components/products-page/products-left-filter/filter-price-range/filter-price-range.component';
import { FilterBrandComponent } from './Components/products-page/products-left-filter/filter-brand/filter-brand.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopFilterComponent } from './Components/products-page/products-page-right/top-filter/top-filter.component';
import { HomePageComponent } from './Components/home-page/home-page.component';


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
    FooterComponent,
    ProductsLeftFilterComponent,
    ProductsPageRightComponent,
    FilterCategoriesComponent,
    FilterPriceRangeComponent,
    FilterBrandComponent,
    TopFilterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatDividerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
