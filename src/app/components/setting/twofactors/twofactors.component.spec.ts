import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwofactorsComponent } from './twofactors.component';

describe('TwofactorsComponent', () => {
  let component: TwofactorsComponent;
  let fixture: ComponentFixture<TwofactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwofactorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwofactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
