import { TestBed } from '@angular/core/testing';

import { AboutMeDataService } from './about-me-data.service';

describe('AboutMeDataService', () => {
  let service: AboutMeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutMeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
