import { Book } from '../book/book.model';

export class Reading {
  id : number;
  user_id : number;
  book_id : number;
  book : Book;
  pages : number;
  current_page : number;
  status : string;
  active : boolean;
  progress : number;
  started_at : Date; 
  finished_at? : Date;

  constructor(resource : any = {}){
    this.id = resource.id;
    this.user_id = resource.user_id;
    this.book = resource.book;
    this.book_id = resource.book.id;
    this.pages = resource.book.pages;
    this.current_page = resource.current_page || 0;
    this.status = resource.status || "Ready to Started";
    this.active = resource.active;
    this.progress = resource.progress || 0;
    this.started_at = resource.started_at || new Date();
    this.finished_at = resource.finished_at;
  }

  public finishHim() {
    this.deactive('Completed');
    this.finished_at = new Date();
    this.current_page = this.pages;
    this.progress = 100;
    this.book.read = true;
    return this;
  }

  public deactive(status : string) {
    this.status = status;
    this.active = false;
    return this;
  }

  public activate(){
    this.status = 'In Progress';
    this.active = true;
    return this;
  }
}