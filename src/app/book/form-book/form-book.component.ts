import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent implements OnInit {

  book : Book = new Book();

  constructor(
    private bookService : BookService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params['pages']){ 
          this.book = new Book(params);
        } 

        if (params['id']){
          this.bookService.show(+params['id'])
                        .subscribe(
                          data => this.book = new Book(data),
                          error => console.error(error),
                          () => {
                            if (this.book && this.book.current_reading){
                              this.router.navigate(['/readings', this.book.current_reading.id])
                            }
                          })
        }
      }
    )
  }

  addBook(_book : Book){
    this.bookService.create(_book)
      .subscribe(data => {
        if(data){
          this.router.navigate(['/books/details', data.id]);
        }
      }, error => console.log(error));
  }

}
