import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { InterviewResultsComponent } from './interview-results/interview-results.component';



@NgModule({
  declarations: [
    ScheduledInterviewsComponent,
    InterviewResultsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InterviewsModule { }
