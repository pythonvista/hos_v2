import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { PharmacyService } from 'src/app/pharmacy/pharmacy.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { ResponseMessage } from 'src/app/_models/response';

@Component({
  selector: 'app-invoice',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  prescriptionID;
  result = null;


  constructor(private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private pharmacyService: PharmacyService,
    private notificationService: NotificationService,
    private notifyService: NotifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.prescriptionID = params['id'];
      if (this.prescriptionID) {
        this.get();
      }
    });
  }

  get() {
    this.pharmacyService.getPrescription(this.prescriptionID).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.result = res.data.docs[0];
        console.log(this.result);
      }
    })
  }

  updatePrescriptionStatus() {
    this.pharmacyService.updatePrescriptionStatus(this.prescriptionID).subscribe((res: ResponseMessage) => {
      if (+res.status === 200) {
        this.notifyService.success("Marked Successfully");

        this.sendNotification();
        this.result.isPrescriptionGiven = true;
      }
      else {

      }
    })

  }

  sendNotification() {
    let notObj = {
      createdBy: this.authService.currentUserValue._id,
      description: 'Prescription is Provided ',
      category: 5,
      sentTo: [this.result.patient._id, this.result.createdBy._id],
    }
    this.notificationService.sendNotification(notObj);

  }



}
