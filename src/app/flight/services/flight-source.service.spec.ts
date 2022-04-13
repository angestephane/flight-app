import { TestBed } from '@angular/core/testing';

import { FlightSourceService } from './flight-source.service';

describe('FlightSourceService', () => {
  let service: FlightSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
