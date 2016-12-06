/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule }  from "@angular/forms";

import { UpdatingComponent } from './updating.component';
import { ToNowPipe } from '../../pipes/to-now.pipe';
import { ReadingService } from '../reading.service';

describe('UpdatingComponent', () => {
  let component: UpdatingComponent;
  let fixture: ComponentFixture<UpdatingComponent>;
  let readingService: ReadingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        ReactiveFormsModule,
        FormsModule, 
        RouterTestingModule 
      ],
      declarations: [ 
        UpdatingComponent,
        ToNowPipe
      ],
      providers: [ 
        ReadingService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    readingService = TestBed.get(ReadingService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
