import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleBooksService {
  private _google_books_api = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http : Http) { }

  search(query : string){
    return this.http.get(this._google_books_api + this._parameterize(query))
                .map( (response : Response) => response.json().items );
  }

  private _parameterize(query : string){
    return query.replace(/\s/g, '+');
  }
}
