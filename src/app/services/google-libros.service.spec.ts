import { TestBed } from '@angular/core/testing';

import { GoogleLibrosService } from './google-libros.service';
import { HttpClientModule } from '@angular/common/http';

describe('GoogleLibrosService', () => {
  let service: GoogleLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GoogleLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
