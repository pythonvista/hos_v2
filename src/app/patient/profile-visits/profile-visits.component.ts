import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-profile-visits',
  templateUrl: './profile-visits.component.html',
  styleUrls: ['./profile-visits.component.css']
})
export class ProfileVisitsComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

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
