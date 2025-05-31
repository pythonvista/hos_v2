import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './_models/user';
import { ResponseMessage } from './_models/response';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUserHOS')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    return this.http.post<any>(`api/signin`, { username, password })
      .pipe(map((response: ResponseMessage) => {
        if (response.status == '200') {

          // login successful if there's a jwt token in the response
          if (response.data.user) {
            const user = { ...response.data.user, roleId: response.data.roleId, token: response.data.token };
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUserHOS', JSON.stringify(user));

            this.currentUserSubject.next(user);

          }
        }
        return response;

      }));
  }

  saveUser(response) {

    if (response.data.user) {
      const user = { ...response.data.user, roleId: response.data.roleId, token: response.data.token };
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUserHOS', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
  }
  toggleactive(id) {
    return this.http.get(`api/toggleActive/${id}`);
  }

  toggleDelete(id) {
    return this.http.get(`api/toggleDelete/${id}`);
  }

  updateUser(id, value: any) {
    console.log('user value', value)
    let form = new FormData();
    Object.keys(value).forEach(key => {
      form.append(key, value[key]);
    });
    return this.http.put(`api/updateUser/${id}`, form);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUserHOS');
    this.currentUserSubject.next(null);
  }

  // request for forgot password
  forgot(value) {
    return this.http.post(`api/forgot`, value, { observe: 'response' });
  }

  // resets Password
  passwordReset(value) {
    return this.http.post(`api/reset`, value, { observe: 'response' });
  }

  // sends Verification Email
  sendVerificationEmail(value) {
    return this.http.post(`api/sendVerificationEmail`, value, { observe: 'response' });
  }

  // verifies Email
  verifyEmailLink(value) {
    return this.http.post(`api/verifyEmail`, value, { observe: 'response' });
  }

  // updates Password
  updatePassword(value) {
    return this.http.post(`api/updatePassword`, value, { observe: 'response' });
  }
}
