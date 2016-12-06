/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpModule } from '@angular/http';

import { Book } from './book.model';
import { BookComponent } from './book.component';
import { BookService } from './book.service';
import { ReadingService } from '../readings/reading.service';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let bookService: BookService;
  let readingService: ReadingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule ],
      declarations: [ BookComponent ],
      providers: [
        BookService,
        ReadingService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookService = TestBed.get(BookService);
    readingService = TestBed.get(ReadingService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have 'book' property`, () => {
    expect(component.book).toBeDefined();
  });

  it(`should have 'hasError' property`, () => {
    expect(component.hasError).toBeDefined();
  });

  it('.startReading should exists', () => {
    expect(component.startReading).toBeTruthy();
  });

  it('.burn should exists', () => {
    expect(component.burn).toBeTruthy();
  });

  it('.markAsRead function should exists', () => {
    expect(component.markAsRead).toBeTruthy();
  });

  it('.markAsRead function should mark book as read', () => {
    let _book = new Book();
    expect(_book.read).toBeFalsy();
    
    component.markAsRead(_book);
    fixture.detectChanges();
    expect(_book.read).toBeTruthy();
  });
});
