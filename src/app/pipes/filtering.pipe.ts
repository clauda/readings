import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filtering' })
export class FilteringPipe implements PipeTransform {

  transform(books: any) {
    return books.filter(book => book.published);
  }

}
