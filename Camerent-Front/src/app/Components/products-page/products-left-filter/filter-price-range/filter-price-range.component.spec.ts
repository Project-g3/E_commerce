import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPriceRangeComponent } from './filter-price-range.component';

describe('FilterPriceRangeComponent', () => {
  let component: FilterPriceRangeComponent;
  let fixture: ComponentFixture<FilterPriceRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPriceRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
