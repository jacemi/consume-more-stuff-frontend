import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item/item.service';
import { UserService } from '../../services/user/user.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { ConditionsService } from '../../services/conditions/conditions.service';
import { StatusService } from '../../services/status/status.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor(
    private statusService: StatusService,
    private conditionsService: ConditionsService,
    private categoriesService: CategoriesService,
    private userService: UserService,
    private itemService: ItemService,
    private router: Router,
  ) {
    const id = this.router.url.split('/')[2];

    this.editMode = false;
    this.dropdown['categories'] = this.categoriesService['categories'];
    this.dropdown['conditions'] = this.conditionsService['conditions'];
    this.dropdown['status'] = this.statusService['status'];

    this.itemService.fetchItemById(id)
      .then(() => {
        this.item = this.itemService.itemData;
        if (this.item['itemData'].poster_id === this.userService.user['id']) {
          this.author = true;
        } else {
          this.author = false;
        }
      });
  }

  item: Object = {
    itemData: {
      condition: {},
      category: {},
      photos: [],
    }
  };
  dropdown: Object = {
    categories: {
      categories: [],
    },
    conditions: {
      conditions: []
    },
    status: {
      status: []
    },
  };
  message: string;
  author: boolean;
  editMode: boolean;

  toggleEditMode(event) {
    event.preventDefault();

    if (this.editMode === true) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }

  submitEditItem(event) {
    event.preventDefault();

    const id = this.item['itemData'].id;
    const data = this.item['itemData'];

    this.itemService.editItemById(id, data)
      .then(() => {
        this.message = 'Edit Successful!';
      });
  }
}
