import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfeatureComponent } from './ourfeature.component';

describe('OurfeatureComponent', () => {
  let component: OurfeatureComponent;
  let fixture: ComponentFixture<OurfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
