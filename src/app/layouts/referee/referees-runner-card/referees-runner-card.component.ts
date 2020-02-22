import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { timer } from 'rxjs';

import * as moment from 'moment';
import { RefereeService } from '../referee.service';

@Component({
  selector: 'app-referees-runner-card',
  templateUrl: './referees-runner-card.component.html',
  styleUrls: ['./referees-runner-card.component.scss'],
})
export class RefereesRunnerCardComponent implements OnInit {
  public data: any;
  public startedTime: any;
  public disableAddButton = false;
  public disableAddDistance = false;
  public isFinish: boolean;
  public lastLapDistance = '0';

  @Input() public set runner(value: any) {
    this.data = value;

    this.disableAddDistance = !!+value.additionalDistance;
  }
  @Input() public set settings(value: any) {
    if (!value) {
      return;
    }
    this.startedTime = value.startedTime;
  }

  @Output() public setLaps: EventEmitter<any> = new EventEmitter();

  constructor(private refereeService: RefereeService) { }

  ngOnInit() {
    this.refereeService.getSettings().subscribe((settings: any) => {

      if (settings[0].state === 'prepare') {
        this.disableAddButton = true;
      } else {
        this.disableAddButton = false;
      }

      if (settings[0].state === 'finish') {
        this.isFinish = true;
        return;
      }
      this.isFinish = false;
    });
  }

  public onAddLastLapDistance() {
    if (this.disableAddDistance) {
      return;
    }
    this.disableAddDistance = true;
    this.data.totalDistance += +this.data.additionalDistance;
    this.setLaps.emit(this.data);
  }

  public handleAddLaps() {
    this.disableAddButton = true;
    ++this.data.laps;
    this.data.totalDistance += 200;
    const time = moment();
    const lastTime = this.data.lapsTime && this.data.lapsTime.length
                      ? this.data.lapsTime[this.data.lapsTime.length - 1].time
                      : this.startedTime;
    const difference = time.diff(lastTime);

    const lastLap = {
      lap: this.data.laps,
      time: +time,
      difference: +difference
    };

    if (!this.data.lapsTime) {
      this.data.lapsTime = [];
      this.data.lapsTime.push(lastLap);
    } else {
      this.data.lapsTime.push(lastLap);
    }
    this.setLaps.emit(this.data);
  }
}
