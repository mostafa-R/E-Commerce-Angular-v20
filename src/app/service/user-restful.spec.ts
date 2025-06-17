import { TestBed } from '@angular/core/testing';

import { UserRestful } from './user-restful';

describe('UserRestful', () => {
  let service: UserRestful;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRestful);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
