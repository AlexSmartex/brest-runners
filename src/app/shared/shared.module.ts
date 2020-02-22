import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from '../pages/results/results.component';



@NgModule({
  declarations: [
    ResultsComponent,
  ],
  exports: [
    ResultsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
