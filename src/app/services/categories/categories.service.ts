import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  topItemsByCategories: Object = {
    categories: []
  };
  categories: Object = {
    categories: []
  };
  categoriesWithItems: Object = {
    categories: []
  };
  constructor(
    private http: HttpClient,
  ) {
    this.fetchCategories();
  }

  fetchTopItemsByCategories() {
    return this.http.get('/api/categories/items/featured')
      .toPromise()
      .then((categories: Array<any>) => {

        this.topItemsByCategories['categories'] = categories;
        return categories;
      })
      .catch((err) => {
        throw err;
      });
  }

  fetchAllItemsByCategories() {
    return this.http.get('/api/categories/items')
      .toPromise()
      .then((categories: Array<any>) => {
        this.categoriesWithItems['categories'] = categories;
      })
      .catch((err) => {
        throw err;
      });
  }

  fetchCategories() {
    return this.http.get('/api/categories')
      .toPromise()
      .then((categories: Array<any>) => {

        this.categories['categories'] = categories;
        return categories;
      })
      .catch((err) => {
        throw err;
      });
  }
}
