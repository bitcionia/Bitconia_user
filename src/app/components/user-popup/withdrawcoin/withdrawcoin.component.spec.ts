import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawcoinComponent } from './withdrawcoin.component';

describe('WithdrawcoinComponent', () => {
  let component: WithdrawcoinComponent;
  let fixture: ComponentFixture<WithdrawcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawcoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
