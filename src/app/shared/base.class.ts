import { OnDestroy } from '@angular/core';

import * as _ from 'lodash';

import { Subscription } from 'rxjs';



export class BaseClass implements OnDestroy {
    public subscription: Set<Subscription> = new Set();

    constructor() {}

    public ngOnDestroy(): void {
        this.subscription.forEach((data) => data && data.unsubscribe && data.unsubscribe());
        this.subscription.clear();
    }

    public subscribe(...subs: Subscription[]): void {
        _.each(subs, s => this.subscription.add(s));
    }
}
