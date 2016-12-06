import { Component, OnInit } from '@angular/core';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  user : User = new User();

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.show(1).subscribe(data => this.user = data);
  }

  place() {
    this.userService.update(this.user)
      .subscribe(data => console.log(data));
  }

}
