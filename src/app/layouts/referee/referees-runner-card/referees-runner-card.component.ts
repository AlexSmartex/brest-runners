import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-referees-runner-card',
  templateUrl: './referees-runner-card.component.html',
  styleUrls: ['./referees-runner-card.component.scss']
})
export class RefereesRunnerCardComponent implements OnInit {
  @Input() id;

  constructor() { }

  ngOnInit() {
  }

}
