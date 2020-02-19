import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.scss']
})
export class RefereeComponent implements OnInit {

  public mockRunners = [
    {
      id: 111111,
    },
    {
      id: 222222,
    },
    {
      id: 333333,
    }
  ];

  public runners = this.mockRunners;

  constructor() { }

  ngOnInit() {
  }

}
