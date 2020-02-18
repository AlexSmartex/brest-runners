import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CountersRunnerPageComponent } from './counters-runner-page/counters-runner-page.component';
import { RunnerComponent } from './counters-runner-page/runner/runner.component';

@NgModule({
  declarations: [
    AppComponent,
    CountersRunnerPageComponent,
    RunnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
