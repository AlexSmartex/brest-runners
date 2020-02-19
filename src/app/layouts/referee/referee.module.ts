import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeComponent } from './referee.component';
import { RefereeRouteModule } from './referee-route.module';

import { RefereesRunnerCardComponent } from './referees-runner-card/referees-runner-card.component';

@NgModule({
  declarations: [
    RefereeComponent,
    RefereesRunnerCardComponent,
  ],
  imports: [
    CommonModule,
    RefereeRouteModule,
  ]
})
export class RefereeModule { }
