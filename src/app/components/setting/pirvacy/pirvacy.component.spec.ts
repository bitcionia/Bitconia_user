import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirvacyComponent } from './pirvacy.component';

describe('PirvacyComponent', () => {
  let component: PirvacyComponent;
  let fixture: ComponentFixture<PirvacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PirvacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PirvacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
