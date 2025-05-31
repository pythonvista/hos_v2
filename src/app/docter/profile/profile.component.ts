import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import { Doctor } from 'src/app/_models/doctor';
import { environment } from 'src/environments/environment';
import { ChatService } from 'src/app/inbox/chat.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoader = false;
  tab = 1;
  doctor: Doctor;
  constructor(private doctorService: DoctorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    private notifyService: NotifyService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.get(params['id']);

    });
  }
  get(id) {
    this.isLoader = true;
    this.doctorService.getById(id).subscribe((res: ResponseMessage) => {
      console.log(res.data)
      if (res.status == '200') {
        this.doctor = res.data;
        this.isLoader = false;

      } else {
        this.router.navigate(['app/hospitals']);
      }

    })
  }

  get ImageSrc() {
    if (this.doctor) {

      return environment.base_url + this.doctor.user.image;
    }
    return environment.base_url + 'images/user.jpg';
  }
  onclickTab(tab) {
    this.tab = tab;
  }

  chat() {
    this.chatService.addfriend(this.doctor.user._id).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.router.navigate([`app/inbox/${this.doctor.user._id}`]);
      }
    })
  }
  markAsActive() {

    this.authService.toggleactive(this.doctor.user._id).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.doctor.user.active = !this.doctor.user.active;
        this.notifyService.success(res.data.msg);
      }
    });
  }
  // [routerLink]="['/app/doctor/edit/', doctor._id]"
  goToEdit() {
    this.router.navigate(['/app/doctor/edit/', this.doctor._id], { queryParams: { returnUrl: this.router.url } });
  }
}