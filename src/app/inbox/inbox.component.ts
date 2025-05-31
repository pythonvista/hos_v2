import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { ChatService } from './chat.service';
import { ResponseMessage } from '../_models/response';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { NotifyService } from '../shared/notify.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  @ViewChild('scrollMe', { static: true }) scrollMe: ElementRef;


  isLoader = false;

  public isChat = false;

  friendSerach = "";
  friendSerachList = [];

  friendsList = [];
  activeUser = null;
  chat = [];
  pageSize = 5;
  pageNo = 0;
  message = '';
  currentUser = null;
  constructor(private chatService: ChatService, private route: ActivatedRoute, private authService: AuthService, private noti: NotifyService) {
    this.currentUser = this.authService.currentUserValue;
    this.route.params.subscribe(params => {
      if (params['id']) {

        this.activeUser = params['id'];

      }
    });
    this.isLoader = true;
    this.chatService.getfriends()
      .subscribe((res: ResponseMessage) => {
        console.log('here', res)
        if (res && +res.status === 200) {
          this.friendsList = res.data.friends;
          this.friendSerachList = this.friendsList;

          if (this.friendsList && this.friendsList.length > 0 && (this.activeUser === null || this.friendsList.findIndex(e => e._id === this.activeUser) === -1)) {
            this.activeUser = this.friendsList[0]._id;
            this.getChatHistory();
          }
          this.isLoader = false;
        }
      }, (err: HttpErrorResponse) => { console.log(err.message) });
  }

  ngOnInit() {
    this.chatService.getMessage().subscribe(data => {
      console.log('msg recived', data)
      if (this.activeUser === data.createdBy._id) {
        this.chat.push(data)
      }
    })
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
    } catch (err) { }
  }

  getImage(image) {
    return environment.base_url + image;
  }

  // swaps two elements of array
  swapArray(Swap1: number, Swap2: number): any {
    var temp = this.friendsList[Swap1];
    this.friendsList[Swap1] = this.friendsList[Swap2]
    this.friendsList[Swap2] = temp
  }

  onChangeUser(id) {
    this.activeUser = id;
    let index = this.friendsList.findIndex(x => x._id === id);
    if (index !== 0) {
      this.swapArray(index, 0);
    }
    this.getChatHistory();
  }
  getChatHistory() {
    this.chatService.getHistory(this.activeUser, this.pageSize, this.pageNo)
      .subscribe((res: ResponseMessage) => {
        console.log('Chat history', res)
        if (+res.status === 200) {
          this.chat = res.data.chat;
        }
      })
  }
  keyDown(event) {
    if (event.keyCode === 13) {
      this.message = this.message.slice(0, -1);
      this.sendMessage();
    }
  }
  sendMessage() {
    let chatObj = {
      createdBy: this.authService.currentUserValue._id,
      sentTo: this.activeUser,
      message: this.message,
      date: new Date(Date.now()).toISOString()
    }
    if (!this.activeUser) {
      this.noti.info("Can;t send message without Recepient");
      this.message = "";
      return;
    }

    console.log('chatObj.date', chatObj.date)
    this.chatService.sendMessage(chatObj);


    this.message = '';

    this.chat.push(Object.assign({}, chatObj, { createdBy: { _id: chatObj.createdBy, name: this.authService.currentUserValue.name, image: this.authService.currentUserValue.image } }));
  }


  getFriendSearhList() {
    if (this.friendSerach == null || this.friendSerach == "") {
      this.friendSerachList = this.friendsList;
    }
    else {
      this.friendSerachList = [];
      for (var i = 0; i < this.friendsList.length; i++) {
        if (this.friendsList[i].name.toLowerCase().includes(this.friendSerach.toLowerCase())) {
          this.friendSerachList.push(this.friendsList[i]);
        }
      }
    }
  }


  activeAdmin() {
    if (this.friendsList && this.friendsList.length > 0) {
      for (var i = 0; i < this.friendsList.length; i++) {
        if (this.friendsList[i].role === 'admin') {
          this.onChangeUser(this.friendsList[i]._id);
          return;
        }
      }
    }
  }
}
