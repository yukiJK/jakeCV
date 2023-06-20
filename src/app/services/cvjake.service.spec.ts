import { TestBed } from '@angular/core/testing';

import { CvjakeService } from './cvjake.service';

describe('CvjakeService', () => {
  let service: CvjakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvjakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
