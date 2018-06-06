import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatusService {
  constructor(
    private http: HttpClient,
  ) {
    this.fetchStatus();
  }

  status: Object = {
    status: [],
  };

  fetchStatus() {
    return this.http.get('/api/status')
      .toPromise()
      .then((status: Array<any>) => {

        this.status['status'] = status;
        return status;
      })
      .catch((err) => {
        throw err;
      });
  }
}
