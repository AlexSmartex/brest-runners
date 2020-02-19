import { Component, OnInit } from '@angular/core';

enum WizardTableHeader {
  ID = 'Номер',
  NAME = 'Имя',
  REFEREE = 'Судья',
}


@Component({
  selector: 'app-runner-list',
  templateUrl: './runner-list.component.html',
  styleUrls: ['./runner-list.component.scss']
})
export class RunnerListComponent implements OnInit {
  public tableTitles = Object.values(WizardTableHeader);

  public runnersMock = [
    {
      id: 123456,
      name: 'John Doe',
      referee: 'Anno Nymous',
    },
    {
      id: 123456,
      name: 'John Doe',
      referee: 'Anno Nymous',
    },    {
      id: 123456,
      name: 'John Doe',
      referee: 'Anno Nymous',
    },
  ];

  public runners = this.runnersMock;

  constructor() { }

  ngOnInit() {
  }

}
