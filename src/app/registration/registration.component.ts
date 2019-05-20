import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective,NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegistrationFrom: FormGroup
  errorMatcher = new CrossFieldErrorMatcher();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.RegistrationFrom = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required]
    }, {
        validator: this.passwordValidator
      });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.RegistrationFrom.controls[controlName].hasError(errorName);
  }

  passwordValidator(form: FormGroup) {
    const condition = form.get('Password').value !== form.get('ConfirmPassword').value;

    return condition ? { passwordsDoNotMatch: true } : null;
  }

  onSignup() {
    console.log(this.RegistrationFrom.value)
  }
}
