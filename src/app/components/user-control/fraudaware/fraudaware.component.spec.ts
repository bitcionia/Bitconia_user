import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudawareComponent } from './fraudaware.component';

describe('FraudawareComponent', () => {
  let component: FraudawareComponent;
  let fixture: ComponentFixture<FraudawareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudawareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudawareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
