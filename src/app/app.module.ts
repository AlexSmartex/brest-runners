import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './pages/home/home.component';
import { CreateCounterComponent } from './pages/create-counter/create-counter.component';
import { CreateRunnerComponent } from './pages/create-runner/create-runner.component';
import { CounterListComponent } from './pages/counter-list/counter-list.component';
import { RunnerListComponent } from './pages/runner-list/runner-list.component';
import { RunnerResultComponent } from './pages/runner-result/runner-result.component';
import { AssignedRunnersListComponent } from './assigned-runners-list/assigned-runners-list.component';
import { AssignedRunnerComponent } from './assigned-runners-list/assigned-runner/assigned-runner.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    HomeComponent,
    CreateCounterComponent,
    CreateRunnerComponent,
    CounterListComponent,
    RunnerListComponent,
    RunnerResultComponent,
    AssignedRunnersListComponent,
    AssignedRunnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
