/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { Book } from './book.model';
import { BookService } from './book.service';

describe('BookService', () => {
  let backend : MockBackend;
  let service : BookService;
  let _book : Book = new Book({ title: 'Hamlet' });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        BookService,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ] 
        }
      ]
    });
    backend = TestBed.get(MockBackend);
    service = TestBed.get(BookService);
  });

  it('should ...', inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  it('.index function should exists', fakeAsync(() => {
    let _response = {};
    
    backend.connections.subscribe(connection => { 
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(_response)
      }));
    });

    tick();

    expect(service.index()).toBeTruthy();
  }));

  it('.update function should exists', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(_book)
      }));
    });

    _book.title = 'Rework';
    _book.author = 'Jason Fried';

    tick();

    expect(service.update(_book)).toBeTruthy();
  }));
});
