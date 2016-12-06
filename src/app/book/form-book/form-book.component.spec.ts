/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpModule } from "@angular/http";

import { FormBookComponent } from './form-book.component';
import { BookService } from '../book.service';

describe('FormBookComponent', () => {
  let component: FormBookComponent;
  let fixture: ComponentFixture<FormBookComponent>;
  let bookService: BookService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ FormBookComponent ],
      providers: [ BookService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookService = TestBed.get(BookService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
