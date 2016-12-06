import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Readings';
  apiRoot : string = 'http://localhost:4000';

  constructor(){ }
}
