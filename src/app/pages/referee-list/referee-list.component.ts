import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { RefereeService } from 'src/app/layouts/referee/referee.service';

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
  public addRefereeModalActive = false;
  public editRefereeModalActive = false;
  public modalFields = [
    WizardTableHeader.NAME,
    WizardTableHeader.LOGIN,
    WizardTableHeader.PASSWORD,
    ...Array(10).fill(WizardTableHeader.RUNNERS.slice(0, -1))
  ]
  public referees: any;
  public refereeData: any;

  constructor(
    private refereeService: RefereeService,
    private db: AngularFireDatabase
  ) { }

  private getReferees() {
    return this.refereeService.getReferies().subscribe((data) => {
      this.referees = data
    });
  }

  ngOnInit() {
    this.getReferees()
  }

  public toggleAddRefereeModal(state: boolean, e?: any, onOutside?: boolean) {
    if (!onOutside) {
      this.addRefereeModalActive = state;
    } else if (onOutside && e.target === e.currentTarget) {
      this.addRefereeModalActive = state;
    }
  }

  public handleAddRefereeFormData(data: any) {
    const refereeData = {
      name: data[0],
      login: data[1],
      password: data[2],
      runners: Object.values(data).slice(3).filter((runner: string) => {
        return runner.length !== 0;
      }),
    };
    this.db
      .list('referies')
      .push(refereeData);

    this.addRefereeModalActive = false;
  }

  public handleAddRefereeCloseModal() {
    this.addRefereeModalActive = false;
  }

  public toggleEditRefereeModal(refereeData: any, state: boolean, e?: any, onOutside?: boolean) {
    if (!onOutside) {
      this.refereeData = refereeData;
      this.editRefereeModalActive = state;
    } else if (onOutside && e.target === e.currentTarget) {
      this.editRefereeModalActive = state;
    }
  }

  public handleEditRefereeFormData(data: any) {
    this.refereeData.name = data[0];
    this.db.list('referees').update(this.refereeData.key, this.refereeData);
    this.editRefereeModalActive = false;
    this.refereeData = [];
  }

  public handleEditRefereeCloseModal() {
    this.editRefereeModalActive = false;
  }

}
