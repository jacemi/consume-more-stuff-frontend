import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Array<any>;
  item: Object = {
    id: null,
    description: '',
    dimensions: '',
    manufacturer: '',
    model: '',
    price: '',
    category_id: null,
    condition_id: null,
    status_id: null,
    poster_id: null,
    category: {},
    condition: {},
    photos: [],
    poster: {},
    status: {}
  };
  // categories: Array<any>;
  // conditions: Array<any>;

  constructor(
    private http: HttpClient
  ) {
  }

  fetchAllItems() {
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
    console.log('Publishing item...');
    console.log(data);
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

    fetchCategories() {
      return this.http.get('/api/categories')
      .toPromise()
      .then((categories) => {
        if (!categories) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }

        return categories;
      })
      .catch((err) => {
        throw err;
      });
    }

    fetchConditions() {
      return this.http.get('/api/conditions')
      .toPromise()
      .then((conditions) => {
        if (!conditions) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }

        return conditions;
      })
      .catch((err) => {
        throw err;
      });
    }
}
