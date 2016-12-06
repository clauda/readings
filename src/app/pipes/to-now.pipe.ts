import { Pipe, PipeTransform } from '@angular/core';

// import * as moment from 'moment';
import moment = require('moment');

@Pipe({
  name: 'toNow'
})
export class ToNowPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let _date = new Date(value);
    return moment([_date.getFullYear(), _date.getMonth(), _date.getDate()]).fromNow()
  }
}