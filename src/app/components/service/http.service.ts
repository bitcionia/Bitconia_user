import { Injectable } from '@angular/core';
import {  EventEmitter, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";
import { map } from "rxjs/operators";
import * as pako from "pako";
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }
//LIVE
baseURL: string = "https://www.bitconia.com/api/v1/";
headers: any = new HttpHeaders({ "Content-Type": "application/json" });
// formheaders: any = new HttpHeaders({ "Content-Type": "multipart/form-data" });
userloginurl: string = "user/auth/login";
  logout: string ="user/auth/logout";
  userOTPUrl: string="user/g2f/auth/get";
  setOTPUrl: string="user/g2f/auth/enable";
  changepassword : string="user/auth/changepassword";
  activityuser : string="user/auth/activity";
  getprofile: string="user/auth/getprofile";
  resetpassword : string="user/auth/resetpassword";
  forgetpassword: string="user/auth/forgotpassword";
  create_user: string="user/user/create";
  googleathu : string="user/auth/g2f/enable";
  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }
  getSessionToken() {
    var tokenId = JSON.parse(localStorage.getItem("data"));
    return tokenId;
  }
  // getAuthHeaders() {
  //   return this.headers.append(
  //     "Authorization", + this.getSessionToken()
  //   );
  // }
  getAuthHeaders() {
    return this.headers.append(
      "Authorization", this.getSessionToken()
    );
  }
userLogin(jsonObj: any): Observable<any> {
  // ////debugger
  return this.http.post(this.baseURL + this.userloginurl, jsonObj, {
    headers: this.headers,
  });
}
logoutSession(jsonObj: any): Observable<any> {
  // ////debugger
  return this.http.post(this.baseURL + this.logout, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
getUser(): Observable<any> {
  return this.http.get(this.baseURL + this.activityuser, {
    headers: this.getAuthHeaders(),
  });
}
changePassword(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.changepassword, jsonObj, 
    {
      headers: this.getAuthHeaders(),
    });
}
forgetPassword(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.forgetpassword, jsonObj, {
    // headers: this.getAuthHeaders(),
  });
}
resetPassword(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.resetpassword, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
createuser(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.create_user, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
g2fa(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.googleathu, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
}