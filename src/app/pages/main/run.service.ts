import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { timer, Observable } from 'rxjs';
import { map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RunService {
  public countDown$: Observable<number>;
  public counter = 21600;

  constructor(private db: AngularFireDatabase) { }

  public startCount(): Observable<number> {
    return this.countDown$ = timer(0, 1000)
      .pipe(
        take(this.counter),
        map(() => --this.counter)
      );
  }

  public createStartedTime(data) {
    return this.db
            .list('settings')
            .update('-M0WtKoHB11m--1RGXDA', data);
  }

  public getSettings() {
    return this.db
            .list('settings')
            .snapshotChanges()
            .pipe(map((changes) => changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))));
  }
}
