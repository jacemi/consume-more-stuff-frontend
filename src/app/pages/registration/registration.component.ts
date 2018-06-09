import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationData: Object = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private validationService: ValidationService
  ) { }

  submitRegistration(event) {
    event.preventDefault();

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
