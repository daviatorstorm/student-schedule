import { TestBed, inject } from '@angular/core/testing';

import { TeachersService } from './teachers.service';

describe('TeachersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeachersService]
    });
  });

  it('should ...', inject([TeachersService], (service: TeachersService) => {
    expect(service).toBeTruthy();
  }));
});
