import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component'
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    CartComponent
  ]
})
export class CartModule { }
