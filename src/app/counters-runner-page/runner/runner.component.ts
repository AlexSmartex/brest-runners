import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.scss']
})
export class RunnerComponent implements OnInit {
  constructor() { }

  onTouch(runner) {
    const dataToSend = {
      runnerId: runner.id,
    }
  }

  ngOnInit() {
  }

}
