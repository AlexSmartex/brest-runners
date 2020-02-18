import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CreateCounterComponent } from './pages/create-counter/create-counter.component';
import { CreateRunnerComponent } from './pages/create-runner/create-runner.component';
import { CounterListComponent } from './pages/counter-list/counter-list.component';
import { RunnerListComponent } from './pages/runner-list/runner-list.component';
import { RunnerResultComponent } from './pages/runner-result/runner-result.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'create-counter',
    component: CreateCounterComponent
  },
  {
    path: 'create-runner',
    component: CreateRunnerComponent
  },
  {
    path: 'counter-list',
    component: CounterListComponent
  },
  {
    path: 'runner-list',
    component: RunnerListComponent
  },
  {
    path: 'runners-result',
    component: RunnerResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
