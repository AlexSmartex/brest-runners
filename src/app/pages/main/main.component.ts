import { Component, OnInit } from '@angular/core';

import { timer } from 'rxjs';

import * as moment from "moment";

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
  public formattedTime = moment(this.startTime).format('hh:mm:ss');

  constructor() { }

  ngOnInit() {
  }

}
