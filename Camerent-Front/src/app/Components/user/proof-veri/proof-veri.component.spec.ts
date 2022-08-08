import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofVeriComponent } from './proof-veri.component';

describe('ProofVeriComponent', () => {
  let component: ProofVeriComponent;
  let fixture: ComponentFixture<ProofVeriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofVeriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofVeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
