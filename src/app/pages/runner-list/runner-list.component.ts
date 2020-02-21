import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _ from 'lodash';
import { RefereeService } from 'src/app/layouts/referee/referee.service';

enum WizardTableHeader {
  ID = 'Номер',
  NAME = 'Имя',
  REFEREE = 'Судья',
}

// enum WizardFormFields {
//   NAME = 'Имя',
//   CITY = 'Город',
//   CLUB = 'Клуб',
// }

@Component({
  selector: 'app-runner-list',
  templateUrl: './runner-list.component.html',
  styleUrls: ['./runner-list.component.scss']
})
export class RunnerListComponent implements OnInit {
  public tableTitles = Object.values(WizardTableHeader);
  public addRunnerModalActive = false;
  public editRunnerModalActive = false;
  public modalFields = [WizardTableHeader.NAME];
  public runners: any;
  public runnerData: any;

  constructor(private refereeService: RefereeService,
              private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getRunners();
  }


  private getRunners() {
    return this.refereeService.getRunners().subscribe((data) => {
      this.runners = _.sortBy(data, ['laps']).reverse();
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
      laps: 0,
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
    this.db.list('runners').update(this.runnerData.key, this.runnerData);
    this.editRunnerModalActive = false;
    this.runnerData = [];
  }

  public handleEditRunnerCloseModal() {
    this.editRunnerModalActive = false;
  }

  public deleteRunner(runner) {
    this.db.list('runners').remove(runner.key);
  }
}
