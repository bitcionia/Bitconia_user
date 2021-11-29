import { TestBed } from '@angular/core/testing';

import { Authencation.GuardService } from './authencation.guard.service';

describe('Authencation.GuardService', () => {
  let service: Authencation.GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authencation.GuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
