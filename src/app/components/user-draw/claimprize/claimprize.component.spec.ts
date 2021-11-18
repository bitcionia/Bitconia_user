import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimprizeComponent } from './claimprize.component';

describe('ClaimprizeComponent', () => {
  let component: ClaimprizeComponent;
  let fixture: ComponentFixture<ClaimprizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimprizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimprizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
