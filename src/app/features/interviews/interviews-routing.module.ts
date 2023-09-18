import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { InterviewResultsComponent } from './interview-results/interview-results.component';

const routes: Routes = [
  { path: 'schedule', component: ScheduledInterviewsComponent },
  { path: 'results', component: InterviewResultsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewsRoutingModule { }
