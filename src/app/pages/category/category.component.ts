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
      console.log('val', val);
      if (val instanceof NavigationEnd) {
        console.log('val is true', val);
        const id = val.url.split('/')[3];
        console.log(id);
        this.categoriesService.fetchCategoryById(id);
        this.category = this.categoriesService.selectedCategory;
      }
    });
    console.log('this category', this.category);
  }
  category: Object = {};

  ngOnInit() {

  }



}
