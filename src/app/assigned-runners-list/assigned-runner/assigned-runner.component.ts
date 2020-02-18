import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assigned-runner',
  templateUrl: './assigned-runner.component.html',
  styleUrls: ['./assigned-runner.component.scss']
})
export class AssignedRunnerComponent implements OnInit {
  @Input() public runner;

  constructor() { }

  public currentLap = 1;
  public lastTouch = 0;

  onTouch() {
    if (Date.now() - this.lastTouch > 3e5) { return; }

    const dataToSend = {
      runnerId: this.runner.id,
      // change to raceStart - Date.now() for first lap later on
      lapTime: this.lastTouch - Date.now(),
      lap: this.currentLap,
    };

    this.lastTouch = Date.now();
    this.currentLap += 1;

    // send data
  }

  ngOnInit() {
  }

}
