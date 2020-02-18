import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeComponent } from './referee.component';
import { RefereeRouteModule } from './referee-route.module';



@NgModule({
  declarations: [
    RefereeComponent,
  ],
  imports: [
    CommonModule,
    RefereeRouteModule,
  ]
})
export class RefereeModule { }
