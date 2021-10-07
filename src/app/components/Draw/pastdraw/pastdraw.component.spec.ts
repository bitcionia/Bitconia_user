import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastdrawComponent } from './pastdraw.component';

describe('PastdrawComponent', () => {
  let component: PastdrawComponent;
  let fixture: ComponentFixture<PastdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastdrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
