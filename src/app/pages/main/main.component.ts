import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

import * as moment from 'moment';

import { RunService } from './run.service';

interface StartTime {
  hour: number;
  minute: number;
  seconds: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public startTime: StartTime = { hour: 6, minute: 0, seconds: 0 };
  public formattedStartTime = moment(this.startTime).format('hh:mm:ss');
  public count = this.runService.counter;

  @Input() public set countDown(value) {
    if (value >= 0) {
      this.count = value;
    }

    if (value === 0) {
      this.handleStopCount();
    }
  }
  @Input() public timeStarted: boolean;

  @Output() public startRun: EventEmitter<boolean> = new EventEmitter();
  @Output() public stopRun: EventEmitter<boolean> = new EventEmitter();

  constructor(private runService: RunService) { }

  ngOnInit() {
  }

  public handleStartCount(): void {
    this.startRun.emit(true);
  }

  public handleStopCount(): void {
    this.stopRun.emit(true);
  }
}
