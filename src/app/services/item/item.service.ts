import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CategoriesService } from '../../services/categories/categories.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(
    private categoriesService: CategoriesService,
    private http: HttpClient
  ) { }

  categories: Object = this.categoriesService.categories;
  data: Object = {};


  fetchTenItems(categories) {
    categories.forEach((category) => {
      return this.http.get(`/api/items?category_id=${category.id}&limit=10`)
        .toPromise()
        .then((items: Array<any>) => {
          if (!items) {
            const error = new Error();
            error['status'] = 500;
            throw error;
          }
          this.data[category.name] = items;
          return items;
        })
        .catch((err) => {
          throw err;
        });
    });
  }

  fetchAllItems(categoryId) {
    return this.http.get('/api/items')
      .toPromise()
      .then((items) => {
        if (!items) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }

        return items;
      })
      .catch((err) => {
        throw err;
      });
  }

  publishItem(data) {
    return this.http.post('/api/items', data)
      .toPromise()
      .then((item) => {
        if (!item) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }

        return item;
      })
      .catch((err) => {
        throw err;
      });
  }

  fetchItemById(id) {
    return this.http.get(`/api/items/${id}`)
      .toPromise()
      .then((item) => {
        if (!item) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }

        return item;
      })
      .catch((err) => {
        throw err;
      });
  }

  editItemById(id, data) {
    return this.http.put(`/api/items/${id}`, data)
      .toPromise()
      .then((item) => {
        if (!item) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }

        return item;
      })
      .catch((err) => {
        throw err;
      });
  }
}
