import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { MainComponent } from 'src/app/pages/main/main.component';
import { RefereeListComponent } from 'src/app/pages/referee-list/referee-list.component';
import { RunnerListComponent } from 'src/app/pages/runner-list/runner-list.component';
import { ResultsComponent } from 'src/app/pages/results/results.component';
import { HeaderComponent } from './header/header.component';
import { AdminRouteModule } from './admin-route.module';



@NgModule({
  declarations: [
    AdminComponent,
    MainComponent,
    RefereeListComponent,
    RunnerListComponent,
    ResultsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRouteModule
  ]
})
export class AdminModule { }
