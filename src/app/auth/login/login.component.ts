import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public referies: any;

  constructor(private router: Router,
              private db: AngularFireDatabase,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public handleClick() {
    this.router.navigate(['./admin']);
  }
}
