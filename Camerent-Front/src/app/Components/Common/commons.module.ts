import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    ProductCardComponent
  ]
})
export class CommonsModule { }
