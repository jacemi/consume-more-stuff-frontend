import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

import { ItemService } from '../../services/item/item.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { Navigation } from 'selenium-webdriver';


@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private categoriesService: CategoriesService,
  ) {

    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url.includes('/item/category/')) {
          const id = val.url.split('/')[3];
          this.categoriesService.fetchCategoryById(id);
          this.category = this.categoriesService.selectedCategory;
        }
      }
    });
  }
  category: Object = {};

  ngOnInit() {

  }



}
