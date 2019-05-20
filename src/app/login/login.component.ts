import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      Email:['', Validators.required, Validators.email],
      Password: ['', Validators.required, Validators.maxLength(12), Validators.minLength(6)]
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.LoginForm.controls[controlName].hasError(errorName);
  }

  onSignup(){
    console.log(this.LoginForm.value)
  }
}
