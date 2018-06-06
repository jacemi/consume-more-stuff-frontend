import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(
    private http: HttpClient
  ) { }

  itemData: Object = {};
  filteredData: Object = {
    items: []
  };

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

  fetchItemsByCategoryId(id) {
    return this.http.get(`/api/items/categories/${id}`)
      .toPromise()
      .then((items: Array<any>) => {
        this.filteredData['items'] = items;
        return items;
      })
      .catch((err) => {
        throw err;
      });
  }
}
