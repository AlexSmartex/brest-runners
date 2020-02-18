import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RefereeComponent } from './referee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'referee',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RefereeComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class RefereeRouteModule { }
