import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _ from 'lodash';
import { RefereeService } from 'src/app/layouts/referee/referee.service';

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
  public addRunnerModalActive = false;
  public editRunnerModalActive = false;
  public modalFields = this.tableTitles;
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

  public handleAddRunnerFormData(event: any) {
    // event is an array of runner data
    // todo send post request with new runner
    this.addRunnerModalActive = false;
  }

  public handleAddRunnerCloseModal() {
    this.addRunnerModalActive = false;
  }

  public toggleEditRunnerModal(runnerData: any, state: boolean, e?: any, onOutside?: boolean) {
    if (!onOutside) {
      this.runnerData = [
        runnerData.number,
        runnerData.name,
        runnerData.referee,
      ];
      this.editRunnerModalActive = state;
    } else if (onOutside && e.target === e.currentTarget) {
      this.editRunnerModalActive = state;
    }
  }

  public handleEditRunnerFormData(event: any) {
    // event is an array of runner data
    // todo send post request with new runner
    this.editRunnerModalActive = false;
  }

  public handleEditRunnerCloseModal() {
    this.editRunnerModalActive = false;
  }
}
