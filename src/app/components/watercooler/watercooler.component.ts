import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { map } from 'rxjs/operators';


import { Project } from '../../classes/project';
import { Wcmessage } from '../../classes/wc-message';
import { WcmessageService } from '../../services/wc-message.service';

import { Watercooler } from '../../classes/watercooler';
import { WatercoolerService } from '../../services/watercooler.service';
import { ProjectService } from '../../services/project.service';
// Keep until we move to a backend
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-watercooler',
  templateUrl: './watercooler.component.html',
  styleUrls: ['./watercooler.component.css']
})
export class WatercoolerComponent implements OnInit {
  @Input() wcmessage: Wcmessage;

  private messageText: string;

  wcmessages: Wcmessage[] = [];
  watercooler: Watercooler;
  project: Project;
  date: Date;
  user: User;

  constructor(private watercoolerService: WatercoolerService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location,
    private wcmessageService: WcmessageService,
    private userService: UserService) { }

  ngOnInit() {
    this.getUser();
    this.getWatercooler().subscribe(_ => {
      ;
      var id = this.watercooler.projectId;
      this.projectService.getProject(id)
        .subscribe(project => this.project = project);
    });
    this.getMessages();

  }

  getWatercooler() {
    const wa = +this.route.snapshot.paramMap.get('wa');
    return this.watercoolerService.getWatercooler(wa)
      .pipe(map(watercooler => this.watercooler = watercooler));
  }

  getUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  getProject(): void {
    const pr = +this.route.snapshot.paramMap.get('pr');
    this.projectService.getProject(pr)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.watercoolerService.updateWatercooler(this.watercooler)
      .subscribe(() => this.goBack());
  }

  addMessage(content: string): void {
    this.date = new Date(Date.now());
    content = content.trim();
    if (!content) { return; }
    this.wcmessageService.addMessage({
      author: this.user.fullName,
      created: this.date,
      content: content,
      watercooler_id: 0
    } as Wcmessage)
      .subscribe(wcmessage => {
        this.wcmessages.push(wcmessage)
      });
  }


  getMessages(): void {
    this.wcmessageService.getMessages()
      .subscribe(wcmessages => this.wcmessages = wcmessages);
  }
}
