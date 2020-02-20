import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';


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
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public tabs: WizardTabInfo[] = [];
  public currentTab: WizardTabInfo = {
    title: WizardTab.RUN,
    link: WizardTabLink.RUN
  };

  @Output() public selectedTab: EventEmitter<WizardTabInfo> = new EventEmitter();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initTabs();
  }

  public selectTab(tab: WizardTabInfo) {
    this.currentTab = tab;

    this.selectedTab.emit(tab);
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

    this.selectTab(this.currentTab);
  }
}
