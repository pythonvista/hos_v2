import { Component, OnInit } from '@angular/core';
import { LabAttendantService } from '../lab-attendant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import { LabAttendant } from 'src/app/_models/labAttendant';
import { environment } from 'src/environments/environment';
import { ChatService } from 'src/app/inbox/chat.service';
import { AuthService } from 'src/app/auth.service';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoader = false;
  tab = 1;
  labAttendant: LabAttendant;
  constructor(private labAttendantService: LabAttendantService,
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
    this.labAttendantService.getById(id).subscribe((res: ResponseMessage) => {
      console.log(res.data)
      if (res.status == '200') {
        this.labAttendant = res.data;
        this.isLoader = false;

      } else {
        this.router.navigate(['app/hospitals']);
      }

    })
  }

  get ImageSrc() {
    if (this.labAttendant) {

      return environment.base_url + this.labAttendant.user.image;
    }
    return environment.base_url + 'images/user.jpg';
  }
  onclickTab(tab) {
    this.tab = tab;
  }

  chat() {
    this.chatService.addfriend(this.labAttendant.user._id).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.router.navigate([`app/inbox/${this.labAttendant.user._id}`]);
      }
    })
  }
  markAsActive() {

    this.authService.toggleactive(this.labAttendant.user._id).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.labAttendant.user.active = !this.labAttendant.user.active;
        this.notifyService.success(res.data.msg);
      }
    });
  }
  goToEdit() {
    this.router.navigate(['/app/labattendant/edit/', this.labAttendant._id], { queryParams: { returnUrl: this.router.url } });
  }
}
