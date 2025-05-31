import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile-medical-history',
  templateUrl: './profile-medical-history.component.html',
  styleUrls: ['./profile-medical-history.component.css']
})
export class ProfileMedicalHistoryComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  medical = [
    {
      title: 'Permanent Diseases (3)',
      list: [
        {
          title: 'Diabetes',
          start: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'Hepatitis',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'AIDS',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        }
      ]
    },
    {
      title: 'Medical Problems (2)',
      list: [
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        }
      ]
    },
    {
      title: 'Allergies (5)',
      list: [
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        }
      ]
    },
    {
      title: 'Medications (6)',
      list: [
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        }
      ]
    },
    {
      title: 'Surgeries (2)',
      list: [
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        }
      ]
    },
    {
      title: 'Dental Issues (4)' ,
      list: [
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        },
        {
          title: 'HTN',
          start: '20 Nov 2019',
          end: '20 Nov 2019',
          status: 'active',
          ref: 'Dr. Asim',
          updated: '20 Nov 2019'
        }
      ]
    }
  ];
  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  onClose() {
    this.modal.dismissAll();

  }
  onOpen() {
    this.modal.open(this.modalContent);
  }


}
