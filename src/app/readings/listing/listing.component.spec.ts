/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from '@angular/router/testing';

import { ListingComponent } from './listing.component';
import { ReadingService } from '../reading.service';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;
  let readingService: ReadingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule 
      ],
      declarations: [ ListingComponent ],
      providers: [ 
        ReadingService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    readingService = TestBed.get(ReadingService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
