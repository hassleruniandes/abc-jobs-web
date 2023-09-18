import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateSelectionComponent } from './candidate-selection/candidate-selection.component';
import { CandidateAssignmentComponent } from './candidate-assignment/candidate-assignment.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { CandidateEvaluationComponent } from './candidate-evaluation/candidate-evaluation.component';
import { TestResultsComponent } from './test-results/test-results.component';



@NgModule({
  declarations: [
    CandidateSelectionComponent,
    CandidateAssignmentComponent,
    CandidateRegistrationComponent,
    CandidateEvaluationComponent,
    TestResultsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CandidatesModule { }
