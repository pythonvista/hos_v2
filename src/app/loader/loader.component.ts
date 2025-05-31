import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading = false;

  constructor(private load: LoaderService) {
  }

  ngOnInit() {
    // this.load.getLoad().subscribe(asd => this.loading = asd);
    this.load.loading.subscribe((v) => {
      this.loading = v;
    });
}
}