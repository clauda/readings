import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 

import { User } from './user.model';

@Injectable()
export class UserService {
  private _base_url = 'http://localhost:4000/api/users';

  constructor(private http: Http) { }

  show(_id : number) {
    return this.http.get(`${this._base_url}/${_id}`)
              .map( (response : Response) => response.json().data as User);
  }

  create(_user : User){
    return this.http.post(this._base_url, { user: _user })
              .map( (response : Response) => response.json().data);
              // .subscribe(response => response.json().data);
  }

  update(_user : any){
    return this.http.put(`${this._base_url}/${_user.id}`, { user: _user })
              .map( (response : Response) => response.json().data);
  }

  destroy(_id : number){
    return this.http
              .delete(`${this._base_url}/${_id}`)
              .subscribe(response => response.json().data);
  }

}
