import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsModalComponent } from './add-products-modal.component';

describe('AddProductsModalComponent', () => {
  let component: AddProductsModalComponent;
  let fixture: ComponentFixture<AddProductsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
