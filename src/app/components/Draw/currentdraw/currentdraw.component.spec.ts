import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentdrawComponent } from './currentdraw.component';

describe('CurrentdrawComponent', () => {
  let component: CurrentdrawComponent;
  let fixture: ComponentFixture<CurrentdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentdrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
