import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


export enum WizardTab {
  RUN = 'Забег',
  REFERRIES = 'Судьи',
  RUNNERS = 'Спортсмены',
  RESULTS = 'Результаты',
}
export enum WizardTabLink {
  RUN = 'run',
  REFERRIES = 'referee-list',
  RUNNERS = 'runner-list',
  RESULTS = 'results',
}
export interface WizardTabInfo {
  title: WizardTab;
  link: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public tabs: WizardTabInfo[] = [];
  public currentTab: WizardTabInfo = {
    title: WizardTab.RUN,
    link: WizardTabLink.RUN
  };

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initTabs();
  }

  public selectTab(tab: WizardTabInfo) {
    this.currentTab = tab;
    this.router.navigate([`./${this.currentTab.link}`], { relativeTo: this.activatedRoute, queryParamsHandling: 'merge' });
  }

  private initTabs() {
    this.tabs = [
      {
        title: WizardTab.RUN,
        link: WizardTabLink.RUN
      },
      {
        title: WizardTab.REFERRIES,
        link: WizardTabLink.REFERRIES
      },
      {
        title: WizardTab.RUNNERS,
        link: WizardTabLink.RUNNERS
      },
      {
        title: WizardTab.RESULTS,
        link: WizardTabLink.RESULTS
      }
    ];
  }
}
