import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Object = {
    id: '',
    email: '',
  };
  constructor(
    private http: HttpClient,
  ) { }

  registerUser(data) {
    console.log('Registering user...');
    return this.http.post('/api/users', data)
      .toPromise()
      .then((user) => {
        if (!user) {
          const error = new Error();
          error['status'] = 500;
          throw error;
        }

        return user;
      })
      .catch((err) => {
        throw err;
      });
  }
}
