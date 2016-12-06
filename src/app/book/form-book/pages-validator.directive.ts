import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

export function validatePages(control : FormControl){
  let re = /^\d+$/;
  let pages = control.value;
  let errors : any = null;

  if ( !re.test(pages) ){
    errors = {
      NaNumber: 'Is Not A Number'
    }
  }
  
  else if( parseInt(pages) < 50 ){
    errors = {
      totalPages: 'weird pages count'
    }
  }

  return errors;
}

@Directive({
  selector: '[pagesValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: validatePages,
      multi: true
    }
  ]
})
export class PagesValidatorDirective { }
