import { Injectable } from '@angular/core';

import { timer, Observable } from 'rxjs';
import { map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RunService {
  public countDown$: Observable<number>;
  public counter = 21600;

  constructor() { }

  public startCount(): Observable<number> {
    return this.countDown$ = timer(0, 1000)
      .pipe(
        take(this.counter),
        map(() => --this.counter)
      );
  }
}
