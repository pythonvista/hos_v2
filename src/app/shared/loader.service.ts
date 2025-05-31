import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
@Injectable()
export class LoaderService {
public loading: Subject<boolean> = new Subject();

  constructor() { }
  getLoad(): Subject<boolean> {
    console.log(this.loading);
    return this.loading;
  }
}
