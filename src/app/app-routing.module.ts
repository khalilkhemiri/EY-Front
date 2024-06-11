import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { MissionArchiveComponent } from './mission-archive/mission-archive.component';
import { AxesComponent } from './axes/axes.component';
import { QuestionComponent } from './question/question.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { SurveyPdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'archive', component:  MissionArchiveComponent},
  { path: 'Axes', component: AxesComponent } ,
  { path: 'question', component: QuestionComponent } ,
  { path: 'criteria', component: CriteriaComponent } ,
  { path: 'eval', component: SurveyPdfComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
