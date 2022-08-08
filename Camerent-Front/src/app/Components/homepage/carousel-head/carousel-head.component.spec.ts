import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHeadComponent } from './carousel-head.component';

describe('CarouselHeadComponent', () => {
  let component: CarouselHeadComponent;
  let fixture: ComponentFixture<CarouselHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
