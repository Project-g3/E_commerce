import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStaffComponent } from './admin-staff.component';

describe('AdminStaffComponent', () => {
  let component: AdminStaffComponent;
  let fixture: ComponentFixture<AdminStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
