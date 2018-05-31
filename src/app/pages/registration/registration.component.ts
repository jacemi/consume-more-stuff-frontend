import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { ValidationService } from '../../services/validation/validation.service';

@Component({
  selector: 'app-registration',
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
    private userService: UserService,
    private validationService: ValidationService
  ) { }

  ngOnInit() {

  }

  submit(event) {
    event.preventDefaults();

    const registrationData = this.registrationData;

    const email = registrationData['email'].trim();

    const valuesArray = [registrationData['email'], registrationData['password'], registrationData['confirmPassword']];

    if (!this.validationService.fieldValidation(valuesArray)) {
      return registrationData['message'] = 'Please fill out the entire form';
    }

    if (!this.validationService.emailValidation(email)) {
      return registrationData['email'] = 'Please enter a valid email address';
    }


    this.userService.registerUser(this.registrationData)
    .toPromise()
    .then((data) => { console.log(data); })
    .catch((err) => { console.log(err); });
  }

}
