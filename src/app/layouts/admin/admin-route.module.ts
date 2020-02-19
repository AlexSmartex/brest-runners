import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/pages/main/main.component';
import { AdminComponent } from './admin.component';
import { RefereeListComponent } from 'src/app/pages/referee-list/referee-list.component';
import { RunnerListComponent } from 'src/app/pages/runner-list/runner-list.component';
import { ResultsComponent } from 'src/app/pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class AdminRouteModule { }
