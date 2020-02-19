import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(private db: AngularFireDatabase) { }

  public getReferies() {
    return this.db
            .list('referies')
            .snapshotChanges()
            .pipe(map((changes) => changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))));
  }

  public getRunners() {
    return this.db
            .list('runners')
            .snapshotChanges()
            .pipe(map((changes) => changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))));
  }

  public updateRunner(runner: any) {
    return this.db.list('runners').update(runner.key, runner);
  }
}
