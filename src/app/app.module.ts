import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { OrderModule } from 'ngx-order-pipe';

import { InMemoryDataService } from './classes/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LegalCasesComponent } from './components/legalcases/legalcases.component';
import { ReportService } from './services/report.service';
import { LegalcaseService } from './services/legalcase.service';
import { LegalcaseDetailComponent } from './components/legalcase-detail/legalcase-detail.component';
import { LegalfilesComponent } from './components/legalfiles/legalfiles.component';
import { LegalfileService } from './services/legalfile.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { CompanyService } from './services/company.service';
import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';
import { TeamService } from './services/team.service';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { NaviComponent } from './components/navi/navi.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { WatercoolerComponent } from './components/watercooler/watercooler.component';
import { WatercoolerService } from './services/watercooler.service';
import { MessageService } from './services/message.service';
import { MessageComponent } from './components/message/message.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LegalCasesComponent,
    LegalcaseDetailComponent,
    LegalfilesComponent,
    ProjectsComponent,
    TeamDetailComponent,
    CompanyDashboardComponent,
    NaviComponent,
    WatercoolerComponent,
    MessageComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [
    LegalcaseService,
    LegalfileService,
    ReportService,
    CompanyService,
    ProjectService,
    TeamService,
    UserService,
    WatercoolerService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
