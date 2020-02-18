import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.scss']
})
export class RunnerComponent implements OnInit {
  @Input() public runner;

  constructor() { }

  public currentLap = 1;
  public lastTouch = 0;

  onTouch(runner) {
    if (Date.now() - this.lastTouch > 3e5) {
      const dataToSend = {
        runnerId: runner.id,
        currentTime: Date.now(),
        lap: this.currentLap
      };

      // send data

      this.currentLap += 1;

      this.lastTouch = Date.now();
    }
  }

  ngOnInit() {
  }

}
