import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ResponseMessage } from 'src/app/_models/response';
import { User } from 'src/app/_models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { ChatService } from 'src/app/inbox/chat.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoader = false;
  tab = 1;
  hospital;
  constructor(private hospitalService: HospitalService,
    private router: Router,
    public authService: AuthService,
    private chatService: ChatService,
    private activatedRoute: ActivatedRoute,

    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      if (params['id']) {
        this.get(params['id']);
      }
    });
  }

  onclickTab(tab) {
    this.tab = tab;
  }

  get(id) {
    this.isLoader = true;
    this.hospitalService.getById(id).subscribe((res: any) => {
      console.log(res);
      if (res.status == '200') {
        this.isLoader = false;
        this.hospital = res.data;

      } else {
        this.router.navigate(['app/hospitals']);
      }

    })
  }

  chat() {
    this.chatService.addfriend(this.hospital.user._id).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.router.navigate([`app/inbox/${this.hospital.user._id}`]);
      }
    })
  }

  get ImageSrc() { return environment.base_url + this.hospital.user.image; }
  markAsActive() {

    this.authService.toggleactive(this.hospital.user._id).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.hospital.user.active = !this.hospital.user.active;
        this.notifyService.success(res.data.msg);
      }
    });
  }
  // [routerLink]="['/app/doctor/edit/', doctor._id]"
  goToEdit() {
    // this.router.navigate(['/app/hospitals/edit/', this.hospital._id], { queryParams: { returnUrl: this.router.url } });
    this.router.navigate(['/app/hospitals/edit/', this.hospital.user._id]);

  }
}
