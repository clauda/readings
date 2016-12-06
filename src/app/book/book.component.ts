import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from './book.model';
import { BookService } from './book.service';

import { Reading } from '../readings/reading.model';
import { ReadingService } from '../readings/reading.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book : Book = new Book();
  hasError : boolean = false;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private bookService : BookService,
    private readingService : ReadingService
    ) { }

  ngOnInit() : void {
    // (+) converts string 'id' to a number
    this.route.params.subscribe(
      params => 
          this.bookService.show(+params['id'])
            .subscribe(
              data => this.book = new Book(data),
              error => {
                this.hasError = true;
                if(error.status == 404){
                  console.warn('book Not found 404')
                }
              },
              () => {
                if (this.book && this.book.current_reading){
                  this.router.navigate(['/readings', this.book.current_reading.id])
                }
              }
            )
    );
  }

  startReading(_book: Book){
    let _reading = new Reading({ user_id: 1, book: _book });
    this.readingService.create(_reading)
      .subscribe(data => {
        if(data){
          this.router.navigate(['/readings', data.id]);
        }
      }, error => console.log(error));
  }

  burn(_book: Book){
    this.bookService.destroy(_book)
        .subscribe(
          response => this.router.navigate(['/library']),
          error => console.log(error));
  }

  markAsRead(_book :  Book){
    _book.read = true;
    this.bookService.update(_book)
        .subscribe(data => console.log(data), error => console.log(error));
  }

}
