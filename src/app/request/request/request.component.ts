import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HosRequestService } from '../hos-request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  isLoader = false;

  result = null;
  page = 1;
  limit = 10;

  query = {
    status: null
  };

  constructor(private hosRequestService: HosRequestService,
    private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.isLoader = true;
    console.log(this.query);
    this.hosRequestService.getAll(this.page, this.limit, this.query).subscribe((res: any) => {
      // console.log(res);
      if (+res.status === 200) {
        this.result = res.body;
        this.isLoader = false;
        console.log(this.result);
      } else {
        this.result = [];
        this.isLoader = false;
      }
    })
  }

  naviagteToaddHos(id) {
    this.router.navigate([`/app/hospitals/request`, id]);

  }

  pageChange(page) {
    this.page = page;
    this.getAll();
  }


  // Delete Alert
  reject(id, index) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Request will be Rejected',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Reject it!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.updateStatus(id, index);

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Doctor not deleted',
          'error'
        )
      }
    });
  }

  updateStatus(id, index) {
    this.hosRequestService.updateStatus(id, { status: 3 }).subscribe((res: any) => {
      if (+res.status === 200) {
        this.result.docs[index].status = 3;
        Swal.fire(
          'Rejected!',
          'Request has been Rejected.',
          'success'
        )
      }
    })
  }

  navigateToDetail(id) {
    this.router.navigate(['app/request/detail/', id])
  }

}
