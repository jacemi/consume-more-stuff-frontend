import { Component, OnInit } from '@angular/core';
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
export class DetailComponent implements OnInit {

  constructor(
    private statusService: StatusService,
    private conditionsService: ConditionsService,
    private categoriesService: CategoriesService,
    private userService: UserService,
    private router: Router,
    private itemService: ItemService,
  ) { }
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
    conditions: [],
    status: [],
  };
  message: string;
  author: boolean;
  editMode: boolean;
  ngOnInit() {
    const id = this.router.url.split('/')[2];

    this.editMode = false;

    this.categoriesService.fetchCategories()
      .then(() => {
        this.dropdown['categories'] = this.categoriesService['categories'];
        // console.log(this.dropdown['categories'].categories[0].id)
      });

    this.conditionsService.fetchConditions()
      .then(() => {
        this.dropdown['conditions'] = this.conditionsService['conditions'];
      });

    this.statusService.fetchStatus()
      .then(() => {
        this.dropdown['status'] = this.statusService['status'];
      });

    return this.itemService.fetchItemById(id)
      .then(() => {
        this.item = this.itemService.itemData;
        console.log(this.item);
        console.log(this.userService.user);
        if (this.item['itemData'].poster_id === this.userService.user['id']) {
          this.author = true;
        } else {
          this.author = false;
        }
      });
  }

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

    this.itemService.editItemById(this.item['itemData'].id, this.item['itemData'])
      .then(() => {
        this.message = 'Edit Successful!';
      });
  }
}
