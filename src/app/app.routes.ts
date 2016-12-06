import { Routes } from '@angular/router';

import { LibraryComponent } from './library/library.component';
import { BookComponent } from './book/book.component';
import { ListingComponent } from './readings/listing/listing.component';
import { UpdatingComponent } from './readings/updating/updating.component';
import { SettingsComponent } from './settings/settings.component';
import { GoogleBooksComponent } from './google-api/google-books.component';
import { FormBookComponent } from './book/form-book/form-book.component';

export const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'search', component: GoogleBooksComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'books/new', component: FormBookComponent },
  { path: 'books/details/:id', component: BookComponent
    // , children: [
    //   { path: 'burn', component: BookComponent }
    // ] 
  },
  { path: 'books/edit/:id', component: FormBookComponent },
  { path: 'readings', component: ListingComponent },
  { path: 'readings/:id', component: UpdatingComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: ListingComponent }
];