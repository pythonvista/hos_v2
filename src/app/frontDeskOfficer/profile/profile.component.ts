import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import { environment } from 'src/environments/environment';
import { ChatService } from 'src/app/inbox/chat.service';
import { AuthService } from 'src/app/auth.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { FrontDeskOfficer } from 'src/app/_models/frontDeskOfficer';
import { FrontDeskOfficerService } from '../front-desk-officer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoader = false;
  tab = 1;
  fdo: FrontDeskOfficer;
  constructor(private frontDeskOfficerService: FrontDeskOfficerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    public authService: AuthService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.get(params['id']);

    });
  }
  get(id) {
    this.isLoader = true;
    this.frontDeskOfficerService.getById(id).subscribe((res: ResponseMessage) => {
      console.log(res.data)
      if (res.status == '200') {
        this.fdo = res.data;
        this.isLoader = false;

      } else {
        this.router.navigate(['app/hospitals']);
      }

    })
  }

  get ImageSrc() {
    if (this.fdo) {

      return environment.base_url + this.fdo.user.image;
    }
    return environment.base_url + 'images/user.jpg';
  }
  onclickTab(tab) {
    this.tab = tab;
  }

  chat() {
    this.chatService.addfriend(this.fdo.user._id).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.router.navigate([`app/inbox/${this.fdo.user._id}`]);
      }
    })
  }
  markAsActive() {

    this.authService.toggleactive(this.fdo.user._id).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.fdo.user.active = !this.fdo.user.active;
        this.notifyService.success(res.data.msg);
      }
    });
  }
  goToEdit() {
    this.router.navigate(['/app/fdo/edit/', this.fdo._id], { queryParams: { returnUrl: this.router.url } });
  }
}
