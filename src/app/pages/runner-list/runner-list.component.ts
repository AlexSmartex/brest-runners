import { Component, OnInit } from '@angular/core';

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
  public modalActive = false;
  public modalFields = this.tableTitles;
  public runners: any;

  constructor(private refereeService: RefereeService) { }

  ngOnInit() {
    this.getRunners();
  }


  private getRunners() {
    return this.refereeService.getRunners().subscribe((data) => {
      this.runners = _.sortBy(data, ['laps']).reverse();
    });
  }

  public toggleModal(state: boolean, e?: any, onOutside?: boolean) {
    if (!onOutside) {
      this.modalActive = state;
    } else if (onOutside && e.target === e.currentTarget) {
      this.modalActive = state;
    }
  }

  public onModalSubmit(data: any) {
    console.log("HELLO")
    this.toggleModal(data);
  }

}
