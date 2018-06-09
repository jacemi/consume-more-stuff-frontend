import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.getUser();
  }

  user: Object = {
    online: false,
    id: '',
    email: '',
  };
  userItems: Object = {
    items: []
  };

  getUser() {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);

    if (!user) {
      return false;
    }

    this.user['online'] = true;
    this.user['id'] = user['id'];
    this.user['email'] = user['email'];

    return true;
  }

  registerUser(data) {
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
    return data;
  }

  loginUser(data) {
    return this.http.post('/api/users/login', data)
      .toPromise()
      .then((user) => {
        if (user['message']) {
          return user;
        } else {
          return this.setUser(user);
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  logoutUser() {
    this.user['online'] = false;
    this.user['id'] = '';
    this.user['email'] = '';
    return this.http.get('/api/users/logout')
      .toPromise()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/');
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }

  fetchUser(id) {
    return this.http.get(`/api/users/${id}`)
      .toPromise()
      .then((user) => {
        this.userItems['items'] = user['items'];
        return user;
      })
      .catch((err) => {
        throw err;
      });
  }

  updateUserPassword(data) {
    const id = this.user['id'];
    return this.http.post(`/api/users/${id}/password`, data)
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
