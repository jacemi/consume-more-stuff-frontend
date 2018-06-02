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
  itemData: Object = {};

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
        this.itemData['itemData'] = item;
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
