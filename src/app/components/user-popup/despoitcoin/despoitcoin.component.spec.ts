import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespoitcoinComponent } from './despoitcoin.component';

describe('DespoitcoinComponent', () => {
  let component: DespoitcoinComponent;
  let fixture: ComponentFixture<DespoitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespoitcoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespoitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
