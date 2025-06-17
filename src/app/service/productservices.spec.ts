import { TestBed } from '@angular/core/testing';

import { Productservices } from './productservices';

describe('Productservices', () => {
  let service: Productservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
