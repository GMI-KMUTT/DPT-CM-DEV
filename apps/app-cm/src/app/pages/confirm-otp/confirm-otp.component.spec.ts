import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOTPComponent } from './confirm-otp.component';

describe('ConfirmOTPComponent', () => {
  let component: ConfirmOTPComponent;
  let fixture: ComponentFixture<ConfirmOTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmOTPComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
