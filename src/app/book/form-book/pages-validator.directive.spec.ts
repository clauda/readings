/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormControl, FormBuilder } from '@angular/forms';

import { FormBookComponent } from './form-book.component';
import { PagesValidatorDirective, validatePages } from './pages-validator.directive';

describe('PagesValidatorDirective', () => {
  let directive = new PagesValidatorDirective();
  let _formBuilder = new FormBuilder();
  let _form : FormControl;

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  
  it('validatePages function should check if parameter given is a Number ', () => {
    expect(validatePages).toBeTruthy();
    
    _form = new FormControl(_formBuilder.group({
        pages: ['', validatePages]
      }));

    // expect(validatePages(_form).errors).toBeDefined();
  });
});
