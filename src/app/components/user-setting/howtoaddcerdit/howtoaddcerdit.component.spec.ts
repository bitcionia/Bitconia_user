import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoaddcerditComponent } from './howtoaddcerdit.component';

describe('HowtoaddcerditComponent', () => {
  let component: HowtoaddcerditComponent;
  let fixture: ComponentFixture<HowtoaddcerditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtoaddcerditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoaddcerditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
