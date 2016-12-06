import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { GoogleBooksService } from './google-api/google-books.service';
import { BookService } from './book/book.service';
import { ReadingService } from './readings/reading.service';
import { UserService } from './settings/user.service';

import { PagesValidatorDirective } from './book/form-book/pages-validator.directive';

import { FilteringPipe } from './pipes/filtering.pipe';
import { ToNowPipe } from './pipes/to-now.pipe';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { ListingComponent } from './readings/listing/listing.component';
import { UpdatingComponent } from './readings/updating/updating.component';
import { SettingsComponent } from './settings/settings.component';
import { GoogleBooksComponent } from './google-api/google-books.component';
import { FormBookComponent } from './book/form-book/form-book.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,

    PagesValidatorDirective,
    
    FilteringPipe,
    ToNowPipe,

    LibraryComponent,
    BookComponent,
    ListingComponent,
    UpdatingComponent,
    SettingsComponent,
    GoogleBooksComponent,
    FormBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GoogleBooksService,
    BookService,
    ReadingService, 
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

