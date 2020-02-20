import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { RefereeService } from 'src/app/layouts/referee/referee.service';
// import moment from 'moment';

enum WizardTableHeader {
  PLACE = 'Место',
  ID = 'Номер',
  NAME = 'Имя',
  PACE = 'Темп',
  LAST_LAP_TIME = 'Время последнего круга',
  LAPS = 'Кругов',
  DISTANCE = 'Расстояние',
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public tableTitles = Object.values(WizardTableHeader);
  public runners: any;

  constructor(private refereeService: RefereeService) { }

  // getPace(distance) {
  //   const momentTime = moment.duration(**racetime** / (distance / 1000));
  //   return `${momentTime.minutes()}:${momentTime.seconds} мин/км`;
  // }

  ngOnInit() {
    this.getRunners();
  }

  private getRunners() {
    return this.refereeService.getRunners().subscribe((data) => {
      this.runners = _.sortBy(data, ['laps']).reverse();
    });
  }

}
