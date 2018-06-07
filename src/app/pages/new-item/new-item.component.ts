import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from '../../services/item/item.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { ConditionsService } from '../../services/conditions/conditions.service';
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
  };
  message: String = '';
  categories: Object = {};
  conditions: Object = {};

  constructor(
    private router: Router,
    private conditionsService: ConditionsService,
    private categoriesService: CategoriesService,
    private itemService: ItemService,
    private validationService: ValidationService
  ) {
    this.categories = this.categoriesService.categories;
    this.conditions = this.conditionsService.conditions;
  }

  submitNewItem(event) {
    event.preventDefault();

    const itemData = this.itemData;
    const valuesArray = [itemData['description'], itemData['category_id'], itemData['condition_id']];

    if (!this.validationService.fieldValidation(valuesArray)) {
      return this.message = 'Description, category, and condition are required fields';
    }
    const form = document.querySelector('form');
    const formData = new FormData(form);

    formData.append('status_id', '1');

    this.itemService.publishItem(formData)
      .then((data) => {
        return this.router.navigateByUrl('/');
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }
}
