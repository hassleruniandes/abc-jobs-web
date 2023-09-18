import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { CandidateEvaluationComponent } from './candidate-evaluation/candidate-evaluation.component';
import { CandidateSelectionComponent } from './candidate-selection/candidate-selection.component';
import { CandidateAssignmentComponent } from './candidate-assignment/candidate-assignment.component';
import { TestResultsComponent } from './test-results/test-results.component';

const routes: Routes = [
  { path: 'register', component: CandidateRegistrationComponent },
  { path: 'test-results', component: TestResultsComponent },
  { path: 'performance-evaluation', component: CandidateEvaluationComponent },
  { path: 'selection', component: CandidateSelectionComponent },
  { path: 'project-assignment', component: CandidateAssignmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
