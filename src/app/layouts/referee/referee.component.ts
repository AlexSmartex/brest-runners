import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RefereeService } from './referee.service';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.scss']
})
export class RefereeComponent implements OnInit {
  public query: string;
  public referies: any;
  public referee: any;
  public runners: any;
  public filteredRunners: any;
  public settings: any;

  constructor(private activatedRoute: ActivatedRoute,
              private refereeService: RefereeService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.query = params.id;

      this.getUsers();
      this.getRunners();
    });

    this.refereeService.getSettings().subscribe((data) => {
      this.settings = data[0];
    });
  }

  private getUsers() {
    return this.refereeService.getReferies().subscribe((data) => {
      this.referies = data;
      this.referee = this.referies.find((ref) => ref.key === this.query);
    });
  }

  private getRunners() {
    return this.refereeService.getRunners().subscribe((data) => {
      this.runners = data;
      this.filterRunners();
    });
  }

  private filterRunners() {
    if (!this.referee.runners) {
      this.filteredRunners = [];
      return;
    }
    this.filteredRunners = this.runners.filter((runner) => this.referee.runners.includes(runner.number));
  }

  public handleAddLaps(runner: any) {
    this.refereeService.updateRunner(runner);
  }
}
