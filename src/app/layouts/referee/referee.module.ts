import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeComponent } from './referee.component';
import { RefereeRouteModule } from './referee-route.module';

import { RefereesRunnerCardComponent } from './referees-runner-card/referees-runner-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RefereeComponent,
    RefereesRunnerCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RefereeRouteModule,
  ]
})
export class RefereeModule { }
