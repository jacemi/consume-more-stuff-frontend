import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Object = {
    categories: []
  };
  selectedCategory: Object = {
    selectedCategory: {}
  };
  constructor(
    private http: HttpClient,
  ) {
  }

  fetchCategories() {
    return this.http.get('/api/categories')
      .toPromise()
      .then((categories: Array<any>) => {
        if (!categories) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }
        this.categories['categories'] = categories;
        return categories;
      })
      .catch((err) => {
        throw err;
      });
  }

  fetchCategoryById(id) {
    return this.http.get(`/api/categories/${id}`)
      .toPromise()
      .then((category: Object) => {
        if (!category) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }
        this.selectedCategory['selectedCategory'] = category;
        return category;
      })
      .catch((err) => {
        throw err;
      });
  }
}
