import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
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
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {

    if (!term) { return value; }
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }
}
