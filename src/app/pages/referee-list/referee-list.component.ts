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
  public referees;

  constructor(private refereeService: RefereeService,
    private db: AngularFireDatabase) { }

  private getReferees() {
    return this.refereeService.getReferies().subscribe((data) => {
      this.referees = data
    });
  }

  ngOnInit() {
    this.getReferees()
  }

}
