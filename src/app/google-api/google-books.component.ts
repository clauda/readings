import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GoogleBooksService } from './google-books.service';
import { BookService } from '../book/book.service';

@Component({
  selector: 'google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.scss']
})
export class GoogleBooksComponent {
  books = [];
  loading : boolean = false;
  error_message : any;

  constructor(
    private router : Router,
    private googleService : GoogleBooksService,
    private bookService : BookService
  ) { }

  search(query : any){
    if(query){
      this.loading = true;
      this.error_message = false;

      this.googleService.search(query).subscribe( 
        data => this.books = data,
        error => {
          console.error(error);
          this.error_message = "Deu Ruim " + error;
          this.loading = false;
        },
        () => { this.loading = false; }
      )
    } else {
      this.error_message = " Try a title or author ";
    }

  }

  addToLibrary(book){
    let _book = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      pages: book.volumeInfo.pageCount
    }

    this.bookService.create(_book)
      .subscribe(data => {
        if(data){
          this.router.navigate(['/books/details', data.id]);
        }
      }, error => {
        this.router.navigate(['/books/new', { title: _book.title, author: _book.author, pages: _book.pages || 0 }])
      });
  }

}
