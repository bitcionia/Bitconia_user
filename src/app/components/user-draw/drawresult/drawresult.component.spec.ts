import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawresultComponent } from './drawresult.component';

describe('DrawresultComponent', () => {
  let component: DrawresultComponent;
  let fixture: ComponentFixture<DrawresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
