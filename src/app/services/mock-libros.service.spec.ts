import { TestBed } from '@angular/core/testing';

import { MockLibrosService } from './mock-libros.service';

describe('MockLibrosService', () => {
  let service: MockLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
