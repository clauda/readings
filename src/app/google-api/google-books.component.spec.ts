/* tslint:disable:no-unused-variable */
import { async, fakeAsync, ComponentFixture, TestBed, inject, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule }  from "@angular/router/testing";
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { GoogleBooksComponent } from './google-books.component';
import { GoogleBooksService } from './google-books.service';
import { Book } from '../book/book.model';
import { BookService } from '../book/book.service';

describe('GoogleBooksComponent', () => {
  let component : GoogleBooksComponent;
  let fixture : ComponentFixture<GoogleBooksComponent>;
  let bookService : BookService;
  let gbs : GoogleBooksService;
  let mockResponse;
  let spy;
  let backend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule 
      ],
      declarations: [ GoogleBooksComponent ],
      providers: [
        GoogleBooksService, 
        BookService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [ MockBackend, BaseRequestOptions ] 
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    bookService = TestBed.get(BookService);
    gbs = TestBed.get(GoogleBooksService);
    backend = TestBed.get(MockBackend);


    mockResponse = [{
          volumeInfo: {
            title: "The Hitchhiker's Guide to the Galaxy",
            authors: ['Douglas Adams'],
            pageCount: 42
          }
        },{
          volumeInfo: {
            title: "Hamlet",
            authors: ['Shakespeare'],
            pageCount: 999
          }
        }];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('.search function', () => {
    it('should be defined', () => {
      expect(component.search).toBeDefined();
    });
  });

  describe('.addToLibrary function', () => {
    it('should be defined', () => {
      expect(component.addToLibrary).toBeDefined();
    });
  });
});
