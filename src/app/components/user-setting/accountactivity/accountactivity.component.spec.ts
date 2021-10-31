import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountactivityComponent } from './accountactivity.component';

describe('AccountactivityComponent', () => {
  let component: AccountactivityComponent;
  let fixture: ComponentFixture<AccountactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountactivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
