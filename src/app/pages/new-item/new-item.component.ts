import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from '../../services/item/item.service';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {
  itemData: Object = {
    description: '',
    dimensions: '',
    manufacturer: '',
    model: '',
    price: '',
    category_id: null,
    condition_id: null,
    status_id: 1,
    message: ''
  };
  categories: Array<any> = [];
  conditions: Array<any> = [];

  constructor(
    private router: Router,
    private itemService: ItemService,
    private validationService: ValidationService
  ) {

    this.itemService.fetchCategories()
    .then((result: Array<any>) => {
      this.categories = result;
    });

    this.itemService.fetchConditions()
    .then((result: Array<any>) => {
      this.conditions = result;
    });

}


  submitNewItem(event) {
    event.preventDefault();

    const itemData = this.itemData;
    const valuesArray = [itemData['description'], itemData['category_id'], itemData['condition_id']];

    if (!this.validationService.fieldValidation(valuesArray)) {
      return itemData['message'] = 'Description, category, and condition are required fields';
    }

    this.itemService.publishItem(itemData)
      .then((data) => {
        return this.router.navigateByUrl('/');
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }

}
