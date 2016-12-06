import { Component, OnInit } from '@angular/core';

import { BookService } from '../book/book.service';
import { Book } from '../book/book.model';
import { BOOKS } from '../mocks';

@Component({
  selector: 'library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  library: Book[] = [];

  constructor(private bookService : BookService) { }

  ngOnInit(){

    this.bookService.index()
      .forEach((books) => {
        books.map((book) => {
          this.library.push(new Book(book))
        })
      })
      .catch((err) => console.error(err));
      // .subscribe(
      //   books => this.library = books,
      //   error => console.error(error),
      //   () => console.log(this.library[0]) 
      // );
  }

}
