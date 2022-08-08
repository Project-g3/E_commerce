import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBrandComponent } from './products-left-filter/filter-brand/filter-brand.component';
import { FilterCategoriesComponent } from './products-left-filter/filter-categories/filter-categories.component';
import { FilterPriceRangeComponent } from './products-left-filter/filter-price-range/filter-price-range.component';
import { ProductsLeftFilterComponent } from './products-left-filter/products-left-filter.component';
import { TopFilterComponent } from './products-page-right/top-filter/top-filter.component';
import { ProductsPageRightComponent } from './products-page-right/products-page-right.component';
import { ProductsPageComponent } from './products-page.component';
import { CommonsModule } from '../Common/commons.module';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    FilterBrandComponent,
    FilterCategoriesComponent,
    FilterPriceRangeComponent,
    ProductsLeftFilterComponent,
    TopFilterComponent,
    ProductsPageRightComponent,
    ProductsPageComponent,
  ],
  imports: [
    CommonModule,
    CommonsModule,
    MatCheckboxModule, 
    MatDividerModule,
    MatSliderModule   
  ],
  exports:[
    ProductsPageComponent
  ]
})
export class ProductspgeModule { }
