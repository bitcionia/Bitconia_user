import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersuppComponent } from './customersupp.component';

describe('CustomersuppComponent', () => {
  let component: CustomersuppComponent;
  let fixture: ComponentFixture<CustomersuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
