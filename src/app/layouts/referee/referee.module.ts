import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeComponent } from './referee.component';
import { RunnersComponent } from 'src/app/pages/runners/runners.component';



@NgModule({
  declarations: [
    RefereeComponent,
    RunnersComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class RefereeModule { }
