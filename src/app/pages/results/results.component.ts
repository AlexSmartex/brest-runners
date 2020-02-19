import { Component, OnInit } from '@angular/core';
// import moment from 'moment';

enum WizardTableHeader {
  PLACE = 'Место',
  ID = 'Номер',
  NAME = 'Имя',
  LAPS = 'Кругов',
  LAST_LAP_TIME = 'Время последнего круга',
  PACE = 'Темп',
  DISTANCE = 'Расстояние',
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public tableTitles = Object.values(WizardTableHeader);

  public resultsMock = [
    {
      place: '1',
      id: '123456',
      name: 'John Doe',
      laps: '120',
      lastLapTime: 12000,
      distance: 27000,
    },
    {
      place: '1',
      id: '123456',
      name: 'John Doe',
      laps: '120',
      lastLapTime: 12000,
      distance: 27000,
    },
    {
      place: '1',
      id: '123456',
      name: 'John Doe',
      laps: '120',
      lastLapTime: 12000,
      distance: 27000,
    },
  ];

  public results = this.resultsMock;

  constructor() { }

  // getPace(distance) {
  //   const momentTime = moment.duration(**racetime** / (distance / 1000));
  //   return `${momentTime.minutes()}:${momentTime.seconds} мин/км`;
  // }

  ngOnInit() {
  }

}
