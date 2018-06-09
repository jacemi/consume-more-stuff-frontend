import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPasswordCheck]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordCheckDirective, multi: true }]
})
export class PasswordCheckDirective implements Validator {
  @Input('validateEqual') public validateEqual: string;

  validate(control: AbstractControl): { [key: string]: any } {
    // self value (e.g. retype password)
    const confirmPassword = control.value;

    // control value (e.g. password)
    const password = control.root.value.password;

    // value not equal
    if (password && confirmPassword !== password) {
      return {
        validateEqual: false
      };
    }
    return null;
  }
}
