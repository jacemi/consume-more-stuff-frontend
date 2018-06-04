import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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
  ) {
    this.getUser();
  }


  getUser() {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    console.log(this);

    if (!user) {
      // this.router.navigateByUrl('/');
      return false;
    }

    this.user['online'] = true;
    this.user['id'] = user['id'];
    this.user['email'] = user['email'];

    return true;
  }

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
    return data;
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

  logoutUser() {
    this.user['online'] = false;
    this.user['id'] = '';
    this.user['email'] = '';
    this.http.get('/api/users/logout')
      .toPromise()
      .then(() => {
        return localStorage.removeItem('user');
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

  // fetchUserItems(userId){
  //   return this.http
  //   .get('/api/items', {
  //     params: new HttpParams().set('id', `${userId}`),
  //     headers: new HttpHeaders().set('Content-Type', 'application/json')
  //   })
  //   .toPromise()
  //   .then((items) => {
  //     if (!items) {
  //       const error = new Error();
  //       error['status'] = 500;
  //       throw error;
  //     }

  //     return items;
  //   })
  //   .catch((err) => {
  //     throw err;
  //   });
  // }


