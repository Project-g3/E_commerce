import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRightTextComponent } from './product-right-text.component';

describe('ProductRightTextComponent', () => {
  let component: ProductRightTextComponent;
  let fixture: ComponentFixture<ProductRightTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRightTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRightTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
