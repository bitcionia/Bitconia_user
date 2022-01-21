import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglesecurityComponent } from './googlesecurity.component';

describe('GooglesecurityComponent', () => {
  let component: GooglesecurityComponent;
  let fixture: ComponentFixture<GooglesecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglesecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglesecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
