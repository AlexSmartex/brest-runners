import { Component } from '@angular/core';

import * as _ from 'lodash';

import { RunService } from 'src/app/pages/main/run.service';
import { WizardTabInfo } from './header/header.component';
import { BaseClass } from 'src/app/shared/base.class';
import { Subscription } from 'rxjs';


export enum WizardTab {
  RUN = 'Забег',
  REFERRIES = 'Судьи',
  RUNNERS = 'Спортсмены',
  RESULTS = 'Результаты',
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends BaseClass {
  public currentTab: WizardTabInfo;
  public TABS: typeof WizardTab = _.cloneDeep(WizardTab);
  public countDown: number;
  public timeStarted: boolean;
  public timeStopped: boolean;
  public sub: Subscription;

  constructor(private runService: RunService) {
    super();
  }

  public handleSelectedTab(tab: WizardTabInfo): void {
    this.currentTab = tab;
  }

  public handleStartRun(start: boolean): void {
    if (!start || this.timeStarted) {
      return;
    }

    this.sub = this.runService.startCount().subscribe((data: number) => {
      this.countDown = data;
      this.timeStarted = true;
      this.timeStopped = false;
    });

    this.subscribe(this.sub);
  }

  public handleStopRun(stop: boolean) {
    if (!stop) {
      return;
    }
    this.timeStarted = false;
    this.timeStopped = true;

    this.sub.unsubscribe();
  }

}
