import { TestBed } from '@angular/core/testing';

import { NewExpenseSamePageGuard } from './new-expense-same-page.guard';

describe('NewExpenseSamePageGuard', () => {
  let guard: NewExpenseSamePageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewExpenseSamePageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
