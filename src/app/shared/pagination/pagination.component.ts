import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() onPageChange = new EventEmitter();

  @Input() page: number;
  @Input() limit: number;
  @Input() totalDocs: number;

  constructor() { }

  ngOnInit() {
  }


  pageChange(page) {
    this.page = page;
    this.onPageChange.emit({ page: this.page, limit: this.limit });
  }

  limitChange() {
    this.onPageChange.emit({ page: this.page, limit: this.limit });
  }

}
