/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { ReadingService } from './reading.service';

describe('ReadingService', () => {
  let service : ReadingService;
  let backend : MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        ReadingService,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ] 
        }
      ]
    });
    service = TestBed.get(ReadingService);
    backend = TestBed.get(MockBackend);
  });

  it('should ...', inject([ReadingService], (service: ReadingService) => {
    expect(service).toBeTruthy();
  }));
});
