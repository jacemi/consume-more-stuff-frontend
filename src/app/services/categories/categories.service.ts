import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Object = {
    categories: [],
  };
  constructor(
    private http: HttpClient,
  ) {
    this.fetchCategories();
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
}
