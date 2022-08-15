import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "../app-routing.module";
import { AboutModule } from "../Components/aboutus/about.module";
import { AdminModule } from "../Components/admin-page/admin.module";
import { CartModule } from "../Components/cart/cart.module";
import { CommonsModule } from "../Components/Common/commons.module";
import { FormModule } from "../Components/form/form.module";
import { HomepageModule } from "../Components/homepage/homepage.module";
import { ProductspgeModule } from "../Components/products-page/productspge.module";
import { SingleproductModule } from "../Components/single-product-page/singleproduct.module";
import { UserModule } from "../Components/user/user.module";

@NgModule({
  imports: [    
   BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    UserModule,
    FormModule,
    FormsModule,
    AdminModule,
    CommonsModule,
    HomepageModule,
    AboutModule,
    ProductspgeModule,
    SingleproductModule,
    CartModule
  ],
  exports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    UserModule,
    FormModule,
    FormsModule,
    AdminModule,
    CommonsModule,
    HomepageModule,
    AboutModule,
    ProductspgeModule,
    SingleproductModule,
    CartModule
  ],
})
export class ModulesModule { }
