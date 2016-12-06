/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
// import { Http, BaseRequestOptions } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule }  from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing"; 

import { AppComponent } from './app.component';
import { ListingComponent } from './readings/listing/listing.component';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { UpdatingComponent } from './readings/updating/updating.component';
import { SettingsComponent } from './settings/settings.component';
import { GoogleBooksComponent } from './google-api/google-books.component';
import { FormBookComponent } from './book/form-book/form-book.component';
import { ToNowPipe } from './pipes/to-now.pipe';

import { routes } from './app.routes';

describe('AppComponent', () => {
  let app : AppComponent;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ReactiveFormsModule, 
        FormsModule, 
        RouterTestingModule.withRoutes(routes) 
      ],
      declarations: [
        AppComponent,
        LibraryComponent,
        BookComponent,
        ListingComponent,
        UpdatingComponent,
        SettingsComponent,
        GoogleBooksComponent,
        FormBookComponent,
        ToNowPipe
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Readings'`, async(() => {
    expect(app.title).toEqual('Readings');
  }));

});
