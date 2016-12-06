/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from "@angular/http";

import { RouterTestingModule } from '@angular/router/testing';

import { LibraryComponent } from './library.component';
import { BookService } from '../book/book.service';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;
  let bookService: BookService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule, 
        RouterTestingModule 
      ],
      declarations: [ LibraryComponent ],
      providers: [ BookService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookService = TestBed.get(BookService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
