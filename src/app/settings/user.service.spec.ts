/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service : UserService;
  let backend : MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ] 
        }
      ]
    });
    backend = TestBed.get(MockBackend);
    service = TestBed.get(UserService);
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
