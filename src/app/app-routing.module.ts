import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { LegalCasesComponent } from './components/legalcases/legalcases.component';
import { LegalcaseDetailComponent } from './components/legalcase-detail/legalcase-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LegalfilesComponent } from './components/legalfiles/legalfiles.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { WatercoolerComponent } from './components/watercooler/watercooler.component';
import { WcmessageComponent } from './components/wc-message/wc-message.component';
import { ReportsComponent } from './components/reports/reports.component';
import { MessageBoardComponent } from './components/message-board/message-board.component';
import { MbMessageInputComponent } from './components/mb-message-input/mb-message-input.component';
import { MbMessageWrapperComponent } from './components/mb-message-wrapper/mb-message-wrapper.component';
import { MbMessageDraftComponent } from './components/mb-message-draft/mb-message-draft.component';
import { MbDraftsComponent } from './components/mb-drafts/mb-drafts.component';
import { MbMessageEditComponent } from './components/mb-message-edit/mb-message-edit.component';
import { MbMessageThreadComponent } from './components/mb-message-thread/mb-message-thread.component';
import { MbMessageSubscribersComponent } from './components/mb-message-subscribers/mb-message-subscribers.component';
import { ToDosComponent } from './components/todos/todos.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';

const routes: Routes = [
  { path: ':id/projects', component: ProjectsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: LegalcaseDetailComponent },
  { path: 'legalcases', component: LegalCasesComponent },
  { path: 'people', component: LegalCasesComponent },
  { path: 'files/:id', component: LegalfilesComponent },
  // { path: ':id/projects', component: ProjectsComponent },
  { path: 'teams/:id', component: TeamDetailComponent },
  { path: ':id/projects/:pr', component: ProjectDashboardComponent },
  { path: ':id/projects/:pr/watercoolers/:wa', component: WatercoolerComponent },
  { path: 'wcmessages/:id', component: WcmessageComponent },
  { path: 'reports/:id', component: ReportsComponent },
  { path: ':id/projects/:pr/messageboards/:mb', component: MessageBoardComponent },
  { path: ':id/messageboard/:mb/new', component: MbMessageWrapperComponent },
  { path: ':id/messages/drafts', component: MbDraftsComponent },
  { path: ':id/messages/drafts/:dr', component: MbMessageDraftComponent },
  { path: ':id/messages/edit/:dr', component: MbMessageEditComponent },
  { path: ':id/messages/:ms', component: MbMessageThreadComponent },
  { path: ':id/messages/:ms/subscribers/edit', component: MbMessageSubscribersComponent },  
  { path: ':id/todos/:pr/todos', component: ToDosComponent},
  { path: ':id/todos/:pr/todos/:to', component: TodoDetailComponent},
  // These defaults need to be last
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
