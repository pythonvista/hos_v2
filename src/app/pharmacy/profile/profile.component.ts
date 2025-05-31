import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseMessage } from 'src/app/_models/response';
import { environment } from 'src/environments/environment';
import { ChatService } from 'src/app/inbox/chat.service';
import { AuthService } from 'src/app/auth.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { Pharmacy } from 'src/app/_models/pharmacy';
import { PharmacyService } from '../pharmacy.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoader = false;
  tab = 1;
  pharmacy: Pharmacy;
  constructor(private pharmacyService: PharmacyService,
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
    this.pharmacyService.getById(id).subscribe((res: ResponseMessage) => {
      console.log(res.data)
      if (res.status == '200') {
        this.pharmacy = res.data;
        this.isLoader = false;

      } else {
        this.router.navigate(['app/pharmacy']);
      }

    })
  }

  onclickTab(tab) {
    this.tab = tab;
  }

  chat() {
    this.chatService.addfriend(this.pharmacy.user._id).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.router.navigate([`app/inbox/${this.pharmacy.user._id}`]);
      }
    })
  }
  markAsActive() {

    this.authService.toggleactive(this.pharmacy.user._id).subscribe((res: ResponseMessage) => {
      if (res.status == '200') {
        this.pharmacy.user.active = !this.pharmacy.user.active;
        this.notifyService.success(res.data.msg);
      }
    });
  }
  goToEdit() {
    this.router.navigate(['/app/pharmacy/edit/', this.pharmacy._id], { queryParams: { returnUrl: this.router.url } });
  }
}
