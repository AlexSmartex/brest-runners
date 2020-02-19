import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-referees-runner-card',
  templateUrl: './referees-runner-card.component.html',
  styleUrls: ['./referees-runner-card.component.scss']
})
export class RefereesRunnerCardComponent implements OnInit {
  public data: any;

  @Input() public set runner(value: any) {
    this.data = value;
  }

  @Output() public setLaps: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public handleAddLaps() {
    ++this.data.laps;

    this.setLaps.emit(this.data);
  }

}
