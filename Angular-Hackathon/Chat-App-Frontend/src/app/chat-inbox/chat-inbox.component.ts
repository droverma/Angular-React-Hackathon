import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { Message } from './Message.model';

const SOCKET_ENDPOINT = 'http://localhost:8000';
@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})


export class ChatInboxComponent implements OnInit {
  socket: any;
  message: String = '';
  msg = { msg: '', type: '' }
  messageList: Array<Message> = [];
  constructor() { }

  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('msgRcv', (msg: string) => {
      this.messageList.push({ msg: msg, type: 'rcv' })
      console.log(this.messageList, 'list')
    })
  }
  SendMessage() {
    this.socket.emit('msgUser', this.message);
    this.messageList.push({ msg: this.message, type: 'sent' })
    this.message = ''
  }
}
