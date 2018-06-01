import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData: Object = {
    email: this.userService.user['email'],
    password: '',
    message: '',
    online: this.userService.user['online'],
  };

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }


  loginUser(event) {
    event.preventDefault();

    const loginData = this.loginData;

    if (!loginData['email'].trim().length) {
      return loginData['message'] = 'Please input an email address.';
    }

    if (!loginData['password'].trim().length) {
      return loginData['message'] = 'Please input a password.';
    }

    return this.userService.loginUser(loginData)
      .then(() => {
        this.loginData['online'] = this.userService.user['online'];
        return this.router.navigateByUrl('/');
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }

  logoutUser(event) {
    event.preventDefault();

    this.userService.logoutUser();
    this.loginData['online'] = this.userService.user['online'];
  }
}
