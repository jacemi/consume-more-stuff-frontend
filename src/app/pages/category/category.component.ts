import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ItemService } from '../../services/item/item.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: Object = {};

  constructor(
    private router: Router,
    private itemService: ItemService,
    private categoriesService: CategoriesService,
    private sidebar: SidebarComponent
  ) {
    this.category = categoriesService.category;
   }


  ngOnInit() {

  }



}
