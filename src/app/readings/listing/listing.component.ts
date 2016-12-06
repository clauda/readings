import { Component, OnInit } from '@angular/core';

import { Reading } from '../reading.model';
import { BOOKS } from '../../mocks';

import { ReadingService } from '../reading.service';

@Component({
  selector: 'list',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  readings : Reading[] = [];

  constructor(private readingService :  ReadingService) { }

  ngOnInit() {
    this.readingService.index()
      .subscribe(
        readings => this.readings = readings,
        error => console.log(error)
      );
  }

  erase(_reading){
    this.readings = [];
  }

}
