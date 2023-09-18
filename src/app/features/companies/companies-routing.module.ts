import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { ProjectCreationComponent } from './project-creation/project-creation.component';

const routes: Routes = [
  { path: 'register', component: CompanyRegistrationComponent },
  { path: 'create-project', component: ProjectCreationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
