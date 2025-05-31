import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { SearchService } from '../shared/search.service';
import { ResponseMessage } from '../_models/response';
import { NotificationService } from '../shared/notification.service';
import { ChatService } from '../inbox/chat.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShown: boolean = false;
  userMessages: any[];

  userNotifications: any[];

  isCollapse = true;
  user: User;
  imageSrc;
  userSearchQuery = '';
  users: User[] = [];
  constructor(private router: Router, public authService: AuthService,
    private chatService: ChatService,
    private notificationService: NotificationService,
    private searchService: SearchService
  ) {

    this.notificationService.getNotification().subscribe(data => {
      console.log('Notification recived', data);
      this.userNotifications.push(data);
    })
  }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
    this.imageSrc = this.user.image ? this.user.image : '../assets/images/users/1.jpg'
    this.imageSrc = environment.base_url + this.imageSrc;
    this.getCurrentUserMessages();
    this.getNotificationsForCurrentUser();

    this.chatService.getMessage().subscribe(data => {
      console.log('msg recived', data);
      this.userMessages.push(data);

    })
  }

  toggleShow() {
    this.isShown = !this.isShown;
  }
  collapse() {
    this.isCollapse = !this.isCollapse;
    const dom: any = document.querySelector('body');
    dom.classList.toggle('mini-sidebar');
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  selectUser(item: User) {
    this.userSearchQuery = item.username + '   ---   ' + item.name;
    let role = item.role;
    if (role === 'hospital') {
      this.router.navigate([`/app/hospitals/profile/${item._id}`]);
    }
    else if (role === 'doctor') {
      this.router.navigate([`/app/doctor/${item._id}`]);
    }
    else if (role === 'patient') {
      this.router.navigate([`/app/patient/${item._id}`]);
    }
  }
  searchUser() {
    if (!this.checkSearchValue()) { return; }
    this.searchService.searchUser(this.userSearchQuery).subscribe((response: ResponseMessage) => {
      if (response.status == '200') {
        this.users = response.data;
      } else {
        this.users = [];
      }

    });
  }
  checkSearchValue() {
    if (this.userSearchQuery === '') {
      return false;
    }
    return true;
  }

  getCurrentUserMessages() {
    this.chatService.getUserMessages().subscribe((res: any) => {
      if (+res.status === 200) {
        this.userMessages = res.data.userMessages;
        // console.log(this.userMessages);
      } else {
        this.userMessages = [];
      }
    })

  }

  getNotificationsForCurrentUser() {
    this.notificationService.getNotificationsById(this.authService.currentUserValue._id).subscribe((res: any) => {
      if (+res.status === 200) {
        this.userNotifications = res.data;
        // console.log(this.userNotifications);
      } else {
        this.userNotifications = [];
      }
    })
  }

  gotoChat() {
    this.router.navigate(['/app/inbox']);
  }

  deleteNotification(id) {
    this.notificationService.deleteNotification(id).subscribe((res: any) => {
      if (+res.status === 200) {
        this.getNotificationsForCurrentUser();
      }
    })
  }

  goToNotification(id, category, url) {
    let role = this.authService.currentUserValue.role;
    this.markReadNotification(id);
    this.deleteNotification(id);
    // vitals
    if (category === 1) {
      this.router.navigate(['/app/patient/profile/', this.authService.currentUserValue.roleId]);
    }
    // appointment
    if (category === 2) {
      this.router.navigate(['/app/calender']);
    }
    // payments
    if (category === 3) {
      this.router.navigate([url]);

      // this.router.navigate(['/app/payment']);
    }

    // lab reports
    if (category === 4) {
      if (role === 'labAttendant') {
        this.router.navigate(['/app/ticket']);

      } else {
        this.router.navigate([url]);
        // this.router.navigate(['/app/patient/profile/', this.authService.currentUserValue.roleId,]);
      }
    }

    // prescriptions
    if (category == 5) {
      this.router.navigate([url]);

      // if (role === 'pharmacy') {
      //   this.router.navigate(['/app/prescription']);

      // } else {
      //   this.router.navigate(['/app/patient/profile/', this.authService.currentUserValue.roleId, 'medical']);

      // }
    }

    if (category == 6) {
      this.router.navigate(['/app/request']);
    }
  }


  showMessagesButton() {
    let role = this.authService.currentUserValue.role;
    if (role === 'admin' || role === 'doctor' || role === 'hospital' || role === 'labAttendant' || role === 'FDO' || role === 'pharmacy') {
      return true;
    } else {
      return false;
    }
  }

  goToProfile() {
    let route = '/';
    if (this.authService.currentUserValue.role === 'patient') {
      route = `/app/patient/profile/${this.authService.currentUserValue.roleId}`
    } else if (this.authService.currentUserValue.role === 'admin') {
      route = `/app/profile`
    }
    else if (this.authService.currentUserValue.role === 'hospital') {
      route = `/app/hospitals/profile/${this.authService.currentUserValue._id}`
    }
    else if (this.authService.currentUserValue.role === 'doctor') {
      route = `/app/doctor/profile/${this.authService.currentUserValue.roleId}`
    }
    else if (this.authService.currentUserValue.role === 'labAttendant') {
      route = `/app/labattendant/profile/${this.authService.currentUserValue.roleId}`
    }
    this.router.navigate([route]);
  }


  markReadNotification(id) {
    this.notificationService.markAsRead(id).subscribe((res: any) => {
      if (+res.status === 200) {
        this.getNotificationsForCurrentUser();
      } else {

      }
    })
  }


  markReadMessage(id) {
    this.userMessages = this.userMessages.filter(msg => msg._id !== id);
    this.chatService.markAsRead(id).subscribe((res: any) => {
      if (+res.status === 200) {
        this.getCurrentUserMessages();
      } else {

      }
    })
  }

  isUnreadMessage() {
    if (!this.userMessages || this.userMessages.length == 0) {
      return false;
    }
    for (let i = 0; i < this.userMessages.length; i++) {
      if (this.userMessages[i].status === 'un-read') {
        // console.log(this.userMessages[i].status);
        return true;
      }
    }
    return false;
  }

  isUnreadNotifiocation() {
    if (!this.userNotifications || this.userNotifications.length == 0) {
      return false;
    }
    for (let i = 0; i < this.userNotifications.length; i++) {
      if (this.userNotifications[i].status === 'un-read') {
        // console.log(this.userNotifications[i].status);
        return true;
      }
    }
    return false;
  }
}
