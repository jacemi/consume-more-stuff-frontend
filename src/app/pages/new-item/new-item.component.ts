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
    message: '',
  };
  categories: Object = this.categoriesService.categories;
  conditions: Object = this.conditionsService.conditions;

  constructor(
    private router: Router,
    private conditionsService: ConditionsService,
    private categoriesService: CategoriesService,
    private itemService: ItemService,
    private validationService: ValidationService
  ) { }

  submitNewItem(event) {
    event.preventDefault();

    const itemData = this.itemData;
    const valuesArray = [itemData['description'], itemData['category_id'], itemData['condition_id']];

    if (!this.validationService.fieldValidation(valuesArray)) {
      return itemData['message'] = 'Description, category, and condition are required fields';
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
