import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import 'rxjs/add/operator/map';

import { Reading } from './reading.model';

@Injectable()
export class ReadingService {
  private _base_url = 'http://localhost:4000';
  private _all;

  constructor(private http: Http) {
    this.index().subscribe(data => this._all = data);
  }

  index(){
    return this.http.get(`${this._base_url}/api/readings`)
                .map((response : Response) => <Reading[]>response.json().data);
  }

  show(_id : number) {
    return this.http.get(`${this._base_url}/api/readings/${_id}`)
                .map((response : Response) => response.json().data as Reading);
  }

  create(_reading : Reading){
    delete _reading.book;
    return this.http.post(`${this._base_url}/api/readings`, { reading: _reading })
              .map( (response : Response) => response.json().data);
  }

  update(_reading : Reading) {
    return this.http.put(`${this._base_url}/api/readings/${_reading.id}`, { reading: _reading })
              .map( (response : Response) => response.json().data as Reading)
              .subscribe(data => new Reading(data));
  }

  destroyAll(){
    // window.localStorage.removeItem(this._ls_key);
  }

  finish(_reading : Reading) {
    this.update( _reading.finishHim() );
  }

  updateProgress(_reading : Reading){
    _reading.progress = Math.round((_reading.current_page/_reading.pages) * 100);

    if (_reading.progress < 100){
      _reading.status = 'In Progress';
      this.update( _reading );
    } else { 
      this.finish( _reading ); 
    }
    return _reading;
  }

  private _filter(id : number){
    return this._all.filter(_resource => _resource.id === id)[0];
  }

}
