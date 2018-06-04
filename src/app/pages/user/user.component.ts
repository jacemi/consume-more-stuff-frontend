import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item/item.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private itemService:
      ItemService,
    private userService:
      UserService
  ) { }
  user: Object = {
    id: '',
    email: '',
  };
  userItems: Object = {
    publishedItems: [],
    soldItems: [],
    delistedItems: []
  };


  ngOnInit() {
    const id = this.userService.user['id'];
    this.userService.fetchUser(id)
      .then((user) => {
        user['items'].map((item) => {
          if (item['status_id'] === 3) {
            this.userItems['delistedItems'].push(item);
          } else if (item['status_id'] === 2) {
            this.userItems['soldItems'].push(item);
          }
          this.userItems['publishedItems'].push(item);
        });
      });
  }
}


