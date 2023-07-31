import { TestBed } from '@angular/core/testing';

import { ProvidedInAnyServiceDemoService } from './provided-in-any-service-demo.service';

describe('ProvidedInAnyServiceDemoService', () => {
  let service: ProvidedInAnyServiceDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidedInAnyServiceDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
