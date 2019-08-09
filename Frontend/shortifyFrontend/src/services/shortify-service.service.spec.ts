import { TestBed } from '@angular/core/testing';

import { ShortifyServiceService } from './shortify-service.service';

describe('ShortifyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortifyServiceService = TestBed.get(ShortifyServiceService);
    expect(service).toBeTruthy();
  });
});
