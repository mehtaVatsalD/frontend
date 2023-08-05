import { TestBed } from '@angular/core/testing';

import { NewExpenseSamePageService } from './new-expense-same-page.service';

describe('NewExpenseSamePageService', () => {
  let service: NewExpenseSamePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewExpenseSamePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
