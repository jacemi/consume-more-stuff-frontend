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
  publishedItems: Object = {
    publishedItems: []
  };
  soldItems: Object = {
    soldItems: []
  };

  ngOnInit() {
    const user = localStorage.getItem('user');
    console.log(user); 
    // this.userService.fetchUserItems()
  }

}
