import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSideComponent } from './user-side.component';

describe('UserSideComponent', () => {
  let component: UserSideComponent;
  let fixture: ComponentFixture<UserSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
