import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-runners-list',
  templateUrl: './assigned-runners-list.component.html',
  styleUrls: ['./assigned-runners-list.component.scss']
})
export class AssignedRunnersListComponent implements OnInit {
  constructor() { }

  public runners = [];

  ngOnInit() {
  }
}
