import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Object = {
    online: false,
    id: '',
    email: '',
  };
  constructor(
    private router: Router,
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

  setUser(data) {
    this.user['online'] = true;
    this.user['id'] = data['id'];
    this.user['email'] = data['email'];

    localStorage.setItem('user', JSON.stringify(this.user));
    return;
  }

  getUser() {
    const user = localStorage.getItem('user');

    if (!user) {
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }

  loginUser(data) {
    console.log('Logging in user...');

    return this.http.post('/api/users/login', data)
      .toPromise()
      .then((user) => {
        console.log('Logged in...');
        return this.setUser(user);
      })
      .catch((err) => {
        throw err;
      });
  }
}
