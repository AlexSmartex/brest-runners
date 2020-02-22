import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { LoginService } from './login.service';
import { RunService } from 'src/app/pages/main/run.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginPlaceholder = 'Логин';
  public passwordPlaceholder = 'Пароль';
  public submitValue = 'Войти';
  public isResults: boolean;

  public loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private runService: RunService,
              private loginService: LoginService) { }

  ngOnInit() {

    this.runService.getSettings().subscribe((data: any) => {
      const state = data[0].state;

      if (state !== 'prepare') {
        this.isResults = true;
      }
    });
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
