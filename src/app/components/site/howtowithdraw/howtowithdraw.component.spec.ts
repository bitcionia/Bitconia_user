import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtowithdrawComponent } from './howtowithdraw.component';

describe('HowtowithdrawComponent', () => {
  let component: HowtowithdrawComponent;
  let fixture: ComponentFixture<HowtowithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtowithdrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtowithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
