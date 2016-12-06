export class User {
  id : number;
  username : string;
  mei : string;
  device: string;
  goal : Object;

  constructor(){
    this.goal = {
      pages_per_day: 0
    }
  }
}