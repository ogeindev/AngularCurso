import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should get a single user', () => {
  //   expect(service.get(1).then(
  //     data => {
  //       console.log(data);
  //       expect(data).toBeTruthy();
  //     }
  //   ))
  // });

});
