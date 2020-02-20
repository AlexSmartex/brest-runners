import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

import { RefereeService } from 'src/app/layouts/referee/referee.service';
// import moment from 'moment';

enum WizardTableHeader {
  PLACE = 'Место',
  ID = 'Номер',
  NAME = 'Имя',
  PACE = 'Средняя скорость круга',
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

  ngOnInit() {
    this.getRunners();
  }

  private getRunners() {
    return this.refereeService.getRunners().subscribe((data) => {
      this.runners = _.sortBy(data, ['laps', 'totalDistance']).reverse();

      this.runners = _.forEach(this.runners, (runner) => {
        runner.distance = `${runner.totalDistance}m`;
        if (runner.lapsTime && runner.lapsTime.length) {
          runner.lastLapTime = moment(runner.lapsTime[runner.lapsTime.length - 1].difference).format('mm:ss');
        } else {
          runner.lastLapTime = '';
        }
        if (!runner.lapsTime) {
          return;
        }
        const differenceArray = runner.lapsTime.map((lapTime) => lapTime.difference)
        const average = differenceArray.reduce((total, amount, index, array) => {
          total += amount;
          if ( index === array.length - 1) {
            return total / array.length;
          } else {
            return total;
          }
        });
        runner.averageLapTime = moment(average).format('mm:ss');
      });
    });
  }

}
