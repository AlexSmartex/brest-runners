import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';


enum MenuItemTitle {
  HOME = 'Home',
  CREATE_COUNTER = 'Create counter',
  CREATE_RUNNER = 'Create runner',
  COUNTER_LIST = 'List of counters',
  RUNNER_LIST = 'List of runner',
  RUNNERS_RESULT = 'Runners result',
}
enum MenuItemLink {
  HOME = 'home',
  CREATE_COUNTER = 'createCounter',
  CREATE_RUNNER = 'createRunner',
  COUNTER_LIST = 'listOfCounters',
  RUNNER_LIST = 'listOfRunner',
  RUNNERS_RESULT = 'runnersResult',
}
interface MenuItem {
  title: MenuItemTitle;
  link: MenuItemLink;
}
@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {
  public active = true;
  public menuItems: MenuItem[] = [];
  public currentItem: MenuItem =  {
    title: MenuItemTitle.HOME,
    link: MenuItemLink.HOME,
  };

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.initTabs();
  }

  public selectItem(item: MenuItem) {
    this.currentItem = item;
    this.router.navigate(['./'], { queryParams: { page: this.currentItem.link }, relativeTo: this.activatedRoute, queryParamsHandling: 'merge' });
  }

  private initTabs() {
    this.menuItems = [
      {
        title: MenuItemTitle.HOME,
        link: MenuItemLink.HOME,
      },
      {
        title: MenuItemTitle.CREATE_COUNTER,
        link: MenuItemLink.CREATE_COUNTER,
      },
      {
        title: MenuItemTitle.CREATE_RUNNER,
        link: MenuItemLink.CREATE_RUNNER,
      },
      {
        title: MenuItemTitle.COUNTER_LIST,
        link: MenuItemLink.COUNTER_LIST,
      },
      {
        title: MenuItemTitle.RUNNER_LIST,
        link: MenuItemLink.RUNNER_LIST,
      },
      {
        title: MenuItemTitle.RUNNERS_RESULT,
        link: MenuItemLink.RUNNERS_RESULT,
      }
    ];
  }
}
