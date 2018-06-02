import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConditionsService } from '../../services/conditions/conditions.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { ItemService } from '../../services/item/item.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private conditionsService: ConditionsService,
    private itemService: ItemService,
    private categoriesService: CategoriesService,
    private http: HttpClient
  ) { }
  categories: Object = this.categoriesService.categories;

  ngOnInit() {
    this.categoriesService.fetchCategories();
  }
}
