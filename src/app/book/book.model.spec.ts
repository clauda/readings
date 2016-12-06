import { Book } from './book.model';
import { BOOKS } from '../mocks';

describe('Model: Book', ()=>{
  let book : Book;

  beforeEach(() => {
    book = new Book(BOOKS[0]);
  });

  it('.read should be false', () => {
    expect(book.read).toBeFalsy();
  });

  it('.hasBeenRead should be defined', () => {
    expect(book.hasBeenRead).toBeTruthy();
  });
});