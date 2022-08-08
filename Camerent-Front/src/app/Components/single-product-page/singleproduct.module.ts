import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImgCarouselComponent } from './product-img-carousel/product-img-carousel.component';
import { ProductRightTextComponent } from './product-right-text/product-right-text.component';
import { SingleProductPageComponent } from './single-product-page.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    ProductImgCarouselComponent,
    ProductRightTextComponent,
    SingleProductPageComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports:[
    SingleProductPageComponent
  ]
})
export class SingleproductModule { }
