import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnlinkService {

  constructor(private httpClient: HttpClient) {
  }
  delete(url) {
    return this.httpClient.post(`api/upload/delete`, {url}, { observe: 'response' });
  }

}
