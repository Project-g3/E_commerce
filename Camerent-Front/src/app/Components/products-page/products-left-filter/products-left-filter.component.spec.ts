import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLeftFilterComponent } from './products-left-filter.component';

describe('ProductsLeftFilterComponent', () => {
  let component: ProductsLeftFilterComponent;
  let fixture: ComponentFixture<ProductsLeftFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLeftFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLeftFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
