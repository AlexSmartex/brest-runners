import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RefereeService } from 'src/app/layouts/referee/referee.service';
import { RunService } from 'src/app/pages/main/run.service';
import * as _ from 'lodash';

enum WizardTableHeader {
  ID = 'Номер',
  NAME = 'Имя',
  CLUB = 'Клуб',
}

enum WizardFormFields {
  NAME = 'Имя',
  CITY = 'Город',
  CLUB = 'Клуб',
}

@Component({
  selector: 'app-runner-list',
  templateUrl: './runner-list.component.html',
  styleUrls: ['./runner-list.component.scss']
})
export class RunnerListComponent implements OnInit {
  public tableTitles = Object.values(WizardTableHeader);
  public addRunnerModalActive = false;
  public editRunnerModalActive = false;
  public modalFields = Object.values(WizardFormFields);
  public modalFieldValues: any;
  public raceState: string;
  public runners: any;
  public runnerData: any;

  constructor(private refereeService: RefereeService,
              private db: AngularFireDatabase,
              private runService: RunService) { }

  ngOnInit() {
    this.getRunners();
    this.runService.getSettings().subscribe((data: any) => {
      this.raceState = data[0].state;
    });
  }

  private getRunners() {
    return this.refereeService.getRunners().subscribe((data: any) => {
      data.forEach((item) => {
        item.number = +item.number;
      });
      this.runners = _.sortBy(data, ['number']);
    });
  }

  public toggleAddRunnerModal(state: boolean, e?: any, onOutside?: boolean) {
    if (!onOutside) {
      this.addRunnerModalActive = state;
    } else if (onOutside && e.target === e.currentTarget) {
      this.addRunnerModalActive = state;
    }
  }

  public handleAddRunnerFormData(data: any) {
    const runnerData = {
      number: this.runners.length + 1,
      name: data[0],
      city: data[1],
      club: data[2],
      lastLapDistance: 0,
      additionalDistance: 0,
      totalDistance: 0,
    };

    this.db
      .list('runners')
      .push(runnerData);

    this.addRunnerModalActive = false;
  }

  public handleAddRunnerCloseModal() {
    this.addRunnerModalActive = false;
  }

  public toggleEditRunnerModal(runnerData: any, state: boolean, e?: any, onOutside?: boolean) {
    if (!onOutside) {
      this.runnerData = runnerData;
      this.editRunnerModalActive = state;
    } else if (onOutside && e.target === e.currentTarget) {
      this.editRunnerModalActive = state;
    }
  }

  public handleEditRunnerFormData(data: any) {
    this.runnerData.name = data[0];
    this.runnerData.city = data[1];
    this.runnerData.club = data[2];
    this.runnerData.laps = data[3] || 0;
    this.runnerData.lastLapDistance = data[4] || 0;
    this.runnerData.additionalDistance = data[5] || 0;
    this.runnerData.totalDistance = data[6] || 0;
    this.db.list('runners').update(this.runnerData.key, this.runnerData);
    this.editRunnerModalActive = false;
    this.runnerData = [];
  }

  public handleEditRunnerCloseModal(event) {
    this.editRunnerModalActive = false;
  }

  public deleteRunner(runner) {
    this.db.list('runners').remove(runner.key);
  }
}
