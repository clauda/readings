/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { GoogleBooksService } from './google-books.service';

describe('GoogleBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend, 
        GoogleBooksService,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ] 
        }
      ]
    });
  });

  it('should ...', inject([GoogleBooksService], (service: GoogleBooksService) => {
    expect(service).toBeTruthy();
  }));
});
