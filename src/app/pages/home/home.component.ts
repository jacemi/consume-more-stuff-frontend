import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private categoriesService: CategoriesService,
    private http: HttpClient
  ) {
    this.categoriesService.fetchTopItemsByCategories();
    this.categories = this.categoriesService.topItemsByCategories;
  }
  categories: Object = {};
}
