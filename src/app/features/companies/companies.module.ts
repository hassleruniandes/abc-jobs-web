import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { ProjectCreationComponent } from './project-creation/project-creation.component';



@NgModule({
  declarations: [
    CompanyRegistrationComponent,
    ProjectCreationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompaniesModule { }
