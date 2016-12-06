import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book.model';
import { BOOKS } from '../mocks';

@Injectable()
export class BookService {
  private _base_url = 'http://localhost:4000/api/books';
  private _all : Book[];

  constructor(private http : Http) { }

  index(){
    return this.http.get(this._base_url)
                .map( response => response.json().data as Book[] );
  }

  show(_id : number) : Observable<Book> {
    return this.http.get(`${this._base_url}/${_id}`)
              .map( (response : Response) => response.json().data as Book );
  }

  create(_book : any){
    delete _book.id;
    return this.http
              .post(this._base_url, { book: _book })
              .map( (response : Response) => response.json().data as Book );
  }

  update(_book : Book) {
    return this.http.put(`${this._base_url}/${_book.id}`, { book: _book })
              .map( (response : Response) => response.json().data as Book);
  }

  destroy(_book : Book){
    return this.http.delete(`${this._base_url}/${_book.id}`)
  }

  private _filter(id : number){
    return this._all.filter(_resource => _resource.id === id)[0];
  }

}
