import { Reading } from '../readings/reading.model';

export class Book {
  id : number;
  title : string;
  author : string;
  pages : number;
  read? : boolean;
  current_reading? : Reading;
  readings? : Reading[];

  constructor(resource : any = {}){
    this.id = resource.id;
    this.title = resource.title;
    this.author = resource.author;
    this.pages = resource.pages;
    this.read = resource.read;
    this.current_reading = resource.current_reading;
    this.readings = resource.readings;
  }

  hasBeenRead() : boolean {
    return !!this.current_reading;
  }
}
