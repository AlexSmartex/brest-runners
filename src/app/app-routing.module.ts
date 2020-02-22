import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'referee',
    loadChildren: () => import('./layouts/referee/referee.module').then(m => m.RefereeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
