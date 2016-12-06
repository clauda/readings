/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpModule } from "@angular/http";

import { SettingsComponent } from './settings.component';
import { UserService } from './user.service';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let userService : UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ SettingsComponent ],
      providers: [ UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('.place', ()=> {
    // spyOn(userService, 'update').and.returnValue(true);
    expect(component.place).toBeTruthy();
  })
});
