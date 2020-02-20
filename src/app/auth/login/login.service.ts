import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { RefereeService } from 'src/app/layouts/referee/referee.service';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

// const MOCK_USERS = [
//   {
//     login : 'alexei',
//     name : 'Гапеев Алексей',
//     password : '123456',
//     runners : [ '1', '2', '3', '4', '5', '6' ]
//   },
//   {
//     login : 'pavel',
//     name : 'Ракецкий Павел',
//     password : '123456',
//     runners : [ '7', '8', '9', '10', '11', '12' ]
//   },
//   {
//     login : 'andrei',
//     name : 'Яковинич Андрей',
//     password : '123456',
//     runners : [ '13', '14', '15', '16', '17' ]
//   },
//   {
//     login : 'alexeiJ',
//     name : 'Янущик Алексей',
//     password : '123456',
//     runners : [ '18', '19', '20', '21', '22' ]
//   },
//   {
//     login: 'admin',
//     password: 'admin',
//   }
// ];

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
