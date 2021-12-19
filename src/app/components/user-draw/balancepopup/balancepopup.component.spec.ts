import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancepopupComponent } from './balancepopup.component';

describe('BalancepopupComponent', () => {
  let component: BalancepopupComponent;
  let fixture: ComponentFixture<BalancepopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancepopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
