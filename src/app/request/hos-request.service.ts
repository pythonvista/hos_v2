import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HosRequestService {

  constructor(private httpClient: HttpClient) { }

  post(request) {
    return this.httpClient.post('api/hosRequest/', request);
  }

  getAll(page = 1, limit = 10, query = {}) {
    return this.httpClient.post(`api/hosRequest/getAll`, {
      page: page,
      limit: limit,
      query: query
    }, { observe: 'response' });
  }

  get(id) {
    return this.httpClient.get(`api/hosRequest/${id}`, { observe: 'response' });
  }

  updateStatus(id, value) {
    return this.httpClient.put(`api/hosRequest/updateStatus/${id}`, value, { observe: 'response' })
  }


  getAdminID() {
    return this.httpClient.get(`api/getAdmin`, { observe: 'response' });
  }
}
