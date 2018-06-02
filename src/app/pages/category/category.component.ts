import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { ItemService } from '../../services/item/item.service';
import { CategoriesService } from '../../services/categories/categories.service';


@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: Object = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private categoriesService: CategoriesService,
  ) {
        const splitUrl = this.router.url.split('/');
    const id = splitUrl.pop();
   this.category = this.categoriesService.fetchCategoryById(id);
  }

  ngOnInit() {

    // this.category = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //   this.categoriesService.fetchCategoryById(params.get('id')))
    // );

  }



}
