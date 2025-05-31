import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { User } from 'src/app/_models/user';
import { environment } from 'src/environments/environment';
import { ResponseMessage } from 'src/app/_models/response';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isLoader = false;
  hospitals: User[];
  page = 0;
  limit = 10;
  active = true;
  totalCount = 0;

  constructor(private hospitalService: HospitalService) { }

  ngOnInit() {
    this.get();
  }
  clickActive() {
    this.active = !this.active;
    this.get();
  }
  get() {
    this.isLoader = true;
    this.hospitalService.get(this.page, this.limit, this.active)
      .subscribe((res: ResponseMessage) => {
        console.log(res)
        if (res.status == '200') {
          this.isLoader = false;
          this.hospitals = res.data.docs as User[];
          this.totalCount = res.data.c;

          console.log(this.hospitals)

        } else {
          this.isLoader = false;
          this.hospitals = [];
          console.log('empty')

        }

      })
  }
  imageUrl(url) {
    return environment.base_url + url
  }
}
