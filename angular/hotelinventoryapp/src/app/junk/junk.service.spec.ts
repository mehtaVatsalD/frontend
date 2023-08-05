import { TestBed } from '@angular/core/testing';

import { JunkService } from './junk.service';

describe('JunkService', () => {
  let service: JunkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JunkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
