import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'; // Importez le module MatSelectModule
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MissionsService } from './service/missions.service';
import { FormGroup } from '@angular/forms';
import { MissionArchiveComponent } from './mission-archive/mission-archive.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AxesComponent } from './axes/axes.component';
import { QuestionComponent } from './question/question.component';
import { SurveyModule } from "survey-angular-ui";
import { CriteriaComponent } from './criteria/criteria.component';
import { SurveyPdfComponent } from "./pdf/pdf.component";
import { AvatarModule } from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    NavbarComponent,
    MissionArchiveComponent,
    AxesComponent,
    QuestionComponent,
    CriteriaComponent,
    SurveyPdfComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    MatToolbarModule,
    MatPaginatorModule,
    SurveyModule,
    AvatarModule,
    IconModule,
  ],
  providers: [ MissionsService,IconSetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


