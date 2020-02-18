import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counters-runner-page',
  templateUrl: './counters-runner-page.component.html',
  styleUrls: ['./counters-runner-page.component.scss']
})
export class CountersRunnerPageComponent implements OnInit {
  constructor() { }

  public runners = [];

  ngOnInit() {
  }
}
