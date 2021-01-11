import { TestBed } from '@angular/core/testing';

import { PacklistLibService } from './packlist-lib.service';

describe('PacklistLibService', () => {
  let service: PacklistLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacklistLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
