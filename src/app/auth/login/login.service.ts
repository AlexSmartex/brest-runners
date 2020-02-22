import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { RefereeService } from 'src/app/layouts/referee/referee.service';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginData$: Subject<{ login: string; password: string }> = new Subject();

  private getUsers() {
    return this.refereeService.getReferies().subscribe((data) => {
      this.users = data;
    });
  }

  private users: any = this.getUsers();

  constructor(private db: AngularFireDatabase,
              private router: Router,
              private refereeService: RefereeService) {
    this.loginData$
      .subscribe((data: any) => {
        let loginnedUser: any = this.users.find((user: any) => user.login === data.login);

        if (!loginnedUser) {
          return;
        }

        if (loginnedUser.password === data.password && loginnedUser.login !== 'admin') {
          const users = this.db
            .list('referies')
            .snapshotChanges()
            .pipe(map((changes) => changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))))
            .subscribe((d) => {
              loginnedUser = d.find((i: any) => i.login === data.login);
              const queryParams = {
                id: loginnedUser.key
              };

              this.router.navigate(['referee'], { queryParams });
            });
        } else if (loginnedUser.password === data.password && loginnedUser.login === 'admin') {
          this.router.navigate(['admin']);
        }
      });
  }
}
