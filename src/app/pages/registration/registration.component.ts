import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationData: Object = {
    email: '',
    password: '',
    confirmPassword: '',
    message: ''
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private validationService: ValidationService
  ) { }

  ngOnInit() {

  }

  submitRegistration(event) {
    event.preventDefault();

    const registrationData = this.registrationData;

    let email = registrationData['email'];
    if (email.length) {
      email = email.trim();
    }

    const valuesArray = [registrationData['email'], registrationData['password'], registrationData['confirmPassword']];

    if (!this.validationService.fieldValidation(valuesArray)) {
      return registrationData['message'] = 'Please fill out the entire form';
    }

    if (!this.validationService.emailValidation(email)) {
      return registrationData['message'] = 'Please enter a valid email address';
    }

    if (registrationData['password'] !== registrationData['confirmPassword']) {
      return registrationData['message'] = 'Please check that both password fields match';
    }



    this.userService.registerUser(this.registrationData)
      .then((data) => {
        return this.router.navigateByUrl('/');
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }

}
