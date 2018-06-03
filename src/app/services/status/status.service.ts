import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatusService {
  constructor(
    private http: HttpClient,
  ) { }

  status: Object = {
    status: [],
  };

  fetchStatus() {
    return this.http.get('/api/status')
      .toPromise()
      .then((status: Array<any>) => {
        if (!status) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }
        this.status['status'] = status;
        return status;
      })
      .catch((err) => {
        throw err;
      });
  }
}
