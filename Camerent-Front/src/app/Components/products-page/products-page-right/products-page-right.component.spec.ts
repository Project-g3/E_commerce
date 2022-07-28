import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageRightComponent } from './products-page-right.component';

describe('ProductsPageRightComponent', () => {
  let component: ProductsPageRightComponent;
  let fixture: ComponentFixture<ProductsPageRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPageRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
