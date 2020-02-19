import { Component, Output, EventEmitter, Input } from '@angular/core';

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
export class MainComponent {
  public startTime: StartTime = { hour: 6, minute: 0, seconds: 0 };
  public formattedStartTime = moment(this.startTime).format('hh:mm:ss');

  @Input() public countDown: number;
  @Input() public timeStarted: boolean;
  @Input() public timeStopped: boolean;

  @Output() public startRun: EventEmitter<boolean> = new EventEmitter();
  @Output() public stopRun: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public handleStartCount(): void {
    this.startRun.emit(true);
  }

  public handleStopCount(): void {
    this.stopRun.emit(true);
  }
}
