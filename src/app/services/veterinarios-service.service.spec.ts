import { TestBed } from '@angular/core/testing';

import { VeterinariosServiceService } from './veterinarios-service.service';

describe('VeterinariosServiceService', () => {
  let service: VeterinariosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinariosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
