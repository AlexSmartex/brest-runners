import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { AngularFireDatabase } from '@angular/fire/database';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginPlaceholder = 'Логин';
  public passwordPlaceholder = 'Пароль';
  public submitValue = 'Войти';

  public loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
  }

  public handleClick() {
    this.router.navigate(['./admin']);
  }

  public onSubmit() {
    const formValue: { login: string; password: string } = this.loginForm.value;

    if (!formValue.login || !formValue.password) {
      return;
    }
    this.loginService.loginData$.next(formValue);
  }
}
