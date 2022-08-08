import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImgCarouselComponent } from './product-img-carousel.component';

describe('ProductImgCarouselComponent', () => {
  let component: ProductImgCarouselComponent;
  let fixture: ComponentFixture<ProductImgCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImgCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImgCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
