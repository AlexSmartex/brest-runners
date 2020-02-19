import { Component, OnInit } from '@angular/core';

enum WizardTableHeader {
  NAME = 'Имя',
  RUNNERS = 'Спортсмены',
  LOGIN = 'Логин',
  PASSWORD = 'Пароль',
}

@Component({
  selector: 'app-referee-list',
  templateUrl: './referee-list.component.html',
  styleUrls: ['./referee-list.component.scss']
})
export class RefereeListComponent implements OnInit {
  public tableTitles = Object.values(WizardTableHeader);

  public refereesMock = [
    {
      name: 'John Doe',
      runners: [123212, 345345, 434545, 988898, 789887, 888899, 223403, 342343, 444298, 657755],
      login: 'johndoe123',
      password: 'qwerty',
    },
    {
      name: 'John Doe',
      runners: [123212, 345345, 434545, 988898, 789887, 888899, 223403, 342343, 444298, 657755],
      login: 'johndoe123',
      password: 'qwerty',
    },
    {
      name: 'John Doe',
      runners: [123212, 345345, 434545, 988898, 789887, 888899, 223403, 342343, 444298, 657755],
      login: 'johndoe123',
      password: 'qwerty',
    },
  ];

  public referees = this.refereesMock;

  constructor() { }

  ngOnInit() {
  }

}
