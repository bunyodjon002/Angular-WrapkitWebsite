import { TestBed } from '@angular/core/testing';

import { Jwt2Service } from './jwt2.service';

describe('Jwt2Service', () => {
  let service: Jwt2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jwt2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
