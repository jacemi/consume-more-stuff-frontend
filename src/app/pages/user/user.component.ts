import { Component } from '@angular/core';

import { ItemService } from '../../services/item/item.service';
import { StatusService } from '../../services/status/status.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(
    private statusService: StatusService,
    private itemService: ItemService,
    private userService: UserService
  ) {
    const id = this.userService.user['id'];

    this.status = this.statusService.status;

    this.userService.fetchUser(id)
      .then(() => {
        this.userItems = this.userService.userItems;
        this.setStatus(this.status['status']);
        this.filterItems(this.userItems['items']);
      });
  }

  user: Object = {
    id: '',
    email: '',
  };
  userItems: Object = {
    items: [],
  };
  status: Object = {
    status: []
  };
  filteredItems: Object = {};

  setStatus(statuses) {
    statuses.forEach((status) => {
      return this.filteredItems[status.id] = [];
    });
  }

  filterItems(items) {
    items.forEach((item) => {
      this.filteredItems[item.status_id].push(item);
    });
  }
}
