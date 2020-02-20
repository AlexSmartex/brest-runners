import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

import { RunService } from 'src/app/pages/main/run.service';
import { WizardTabInfo, WizardTabLink } from './header/header.component';
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
export class AdminComponent extends BaseClass implements OnInit {
  public currentTab: WizardTabInfo;
  public TABS: typeof WizardTab = _.cloneDeep(WizardTab);
  public countDown: number;
  public timeStarted: boolean;
  public timeStopped: boolean;
  public sub: Subscription;
  public state: string;

  constructor(private runService: RunService) {
    super();
  }

  ngOnInit() {
    this.runService.getSettings().subscribe((data) => {
      this.state = data[0].state;

      if (this.state === 'start') {
        this.timeStarted = true;
        const startedTime = data[0].startedTime;
        const currentTime = +new Date();
        const difference = currentTime - startedTime;
        const formattedDifference = Math.floor(moment.duration(difference).asSeconds());

        this.runService.counter = this.runService.counter - formattedDifference;

        this.sub = this.runService.startCount().subscribe((d: number) => {
          this.countDown = d;
        });
      } else if (this.state === 'finish') {
      }
    });
  }

  public handleSelectedTab(tab: WizardTabInfo): void {
    this.currentTab = tab;
  }

  public handleStartRun(start: boolean): void {
    if (!start || this.timeStarted) {
      return;
    }

    this.createStartedTime();
  }

  public handleStopRun(stop: boolean) {
    if (!stop) {
      return;
    }

    const data = {
      state: 'finish'
    };
    this.runService.createStartedTime(data);

    this.sub.unsubscribe();
  }

  private createStartedTime() {
    const data = {
      startedTime: +moment(new Date()),
      state: 'start'
    };

    this.runService.createStartedTime(data);
  }

}
