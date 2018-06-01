import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConditionsService {
  conditions: Object = {
    conditions: [],
  };
  constructor(
    private http: HttpClient,
  ) {
    this.fetchConditions();

  }

  fetchConditions() {
    return this.http.get('/api/conditions')
      .toPromise()
      .then((conditions: Array<any>) => {
        if (!conditions) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }
        this.conditions['conditions'] = conditions;
        return conditions;
      })
      .catch((err) => {
        throw err;
      });
  }
}
