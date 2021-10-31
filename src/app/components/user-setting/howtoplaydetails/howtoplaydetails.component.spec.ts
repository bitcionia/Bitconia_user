import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoplaydetailsComponent } from './howtoplaydetails.component';

describe('HowtoplaydetailsComponent', () => {
  let component: HowtoplaydetailsComponent;
  let fixture: ComponentFixture<HowtoplaydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtoplaydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoplaydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
