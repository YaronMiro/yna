import { Component, OnInit } from '@angular/core';

import { MessageService } from './../services/message/message.service';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  enviromentProduction = environment.production;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
