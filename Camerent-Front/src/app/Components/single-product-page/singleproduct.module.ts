import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImgCarouselComponent } from './product-img-carousel/product-img-carousel.component';
import { ProductRightTextComponent } from './product-right-text/product-right-text.component';
import { SingleProductPageComponent } from './single-product-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductImgCarouselComponent,
    ProductRightTextComponent,
    SingleProductPageComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    FormsModule
  ],
  exports:[
    SingleProductPageComponent
  ]
})
export class SingleproductModule { }
