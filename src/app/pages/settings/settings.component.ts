import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private validationService: ValidationService
  ) { }
  passwordUpdateData: Object = {
    email: '',
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  };
  message: String = '';

  ngOnInit() {
  }

  submitPasswordUpdate(event) {
    event.preventDefault();

    const passwordUpdateData = this.passwordUpdateData;

    let email = passwordUpdateData['email'];
    if (email.length) {
      email = email.trim();
    }

    const valuesArray = [passwordUpdateData['email'], passwordUpdateData['password'], passwordUpdateData['newPassword'], passwordUpdateData['confirmNewPassword']];

    if (!this.validationService.fieldValidation(valuesArray)) {
      return this.message = 'Please fill out the entire form';
    }

    if (!this.validationService.emailValidation(email)) {
      return this.message = 'Please enter a valid email address';
    }

    if (passwordUpdateData['newPassword'] !== passwordUpdateData['confirmNewPassword']) {
      return this.message = 'Please check that both new password fields match';
    }

    this.userService.updateUserPassword(this.passwordUpdateData)
      .then((data) => {
        return this.router.navigateByUrl('/user');
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }

}
