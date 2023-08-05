import { TestBed } from '@angular/core/testing';

import { JunkGuard } from './junk.guard';

describe('JunkGuard', () => {
  let guard: JunkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JunkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
