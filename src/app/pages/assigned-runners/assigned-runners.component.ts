import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-runners',
  templateUrl: './assigned-runners.component.html',
  styleUrls: ['./assigned-runners.component.scss']
})
export class AssignedRunnersComponent implements OnInit {

  constructor() { }

  public runners = [];

  ngOnInit() {
  }

}
