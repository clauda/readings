import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Reading } from '../reading.model';
import { ReadingService } from '../reading.service';

@Component({
  selector: 'show',
  templateUrl: './updating.component.html',
  styleUrls: ['./updating.component.scss']
})
export class UpdatingComponent implements OnInit {
  reading : Reading = new Reading({book:{}});

  constructor(
    private route : ActivatedRoute,
    private readingService : ReadingService 
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.readingService.show(+params['id'])
        .subscribe(
          data => this.reading = new Reading(data),
          error => console.error(error))
    );
  }

  update(_reading : Reading){
    this.readingService.updateProgress( _reading ) //.subscribe(data => this.reading = new Reading(data)); 
  }

  finish(_reading : Reading){
    this.readingService.finish( _reading );
  }

  deactiveTo( _reading : Reading, status : string ){
    this.readingService.update( _reading.deactive(status) );
  }

  resume(_reading : Reading){
    this.readingService.update( _reading.activate() );
  }

}
