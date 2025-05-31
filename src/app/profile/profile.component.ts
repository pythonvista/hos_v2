import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  admin: User;
  tab = 1;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.admin = this.authService.currentUserValue
  }
  get ImageSrc() {return environment.base_url + this.admin.image; }
  onclickTab(tab) {
    this.tab= tab;
  }
}
