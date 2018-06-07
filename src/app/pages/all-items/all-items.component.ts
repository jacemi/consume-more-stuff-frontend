import { Component } from '@angular/core';

import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent {
  constructor(
    private categoriesService: CategoriesService
  ) {
    this.categoriesService.fetchAllItemsByCategories()
      .then(() => {

        this.categoriesWithItems = this.categoriesService.categoriesWithItems;
      });
  }
  categoriesWithItems: Object = {
    categories: []
  };


}
