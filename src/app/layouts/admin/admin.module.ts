import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { MainComponent } from 'src/app/pages/main/main.component';
import { RefereeListComponent } from 'src/app/pages/referee-list/referee-list.component';
import { RunnerListComponent } from 'src/app/pages/runner-list/runner-list.component';
import { HeaderComponent } from './header/header.component';
import { AdminRouteModule } from './admin-route.module';
import { FormatTimePipe } from 'src/app/shared/pipes/format-time.pipe';
import { ModalComponent } from 'src/app/modal/modal.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AdminComponent,
    MainComponent,
    RefereeListComponent,
    RunnerListComponent,
    HeaderComponent,
    FormatTimePipe,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRouteModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AdminModule { }
