import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  // Rutas para la funcionalidad de candidatos (Candidates)
  {
    path: 'candidates',
    loadChildren: () => import('./features/candidates/candidates-routing.module').then(m => m.CandidatesRoutingModule),
  },

  // Rutas para la funcionalidad de empresas (Companies)
  {
    path: 'companies',
    loadChildren: () => import('./features/companies/companies-routing.module').then(m => m.CompaniesRoutingModule),
  },

  // Rutas para la funcionalidad de entrevistas (Interviews)
  {
    path: 'interviews',
    loadChildren: () => import('./features/interviews/interviews-routing.module').then(m => m.InterviewsRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
