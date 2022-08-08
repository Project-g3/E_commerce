import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ReviewComponent } from './review/review.component';
import { ProductComponent } from './product/product.component';
import { CarouselHeadComponent } from './carousel-head/carousel-head.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    ReviewComponent,
    CategoryComponent,
    AboutComponent,
    CarouselHeadComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    AppRoutingModule
  ],
  exports:[
    CarouselHeadComponent,
  ]
})
export class HomepageModule { }
