import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudawarenComponent } from './fraudawaren.component';

describe('FraudawarenComponent', () => {
  let component: FraudawarenComponent;
  let fixture: ComponentFixture<FraudawarenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FraudawarenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudawarenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
