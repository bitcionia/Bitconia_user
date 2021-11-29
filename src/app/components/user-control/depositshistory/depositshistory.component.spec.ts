import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositshistoryComponent } from './depositshistory.component';

describe('DepositshistoryComponent', () => {
  let component: DepositshistoryComponent;
  let fixture: ComponentFixture<DepositshistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositshistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
