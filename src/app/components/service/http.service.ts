import { Injectable } from '@angular/core';
import {  EventEmitter, Output } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";
// import { map } from "rxjs/operators";
import * as pako from "pako";
import { ToastrService } from "ngx-toastr";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
  errorCount:number=0;
  tokenId: any;
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }
  // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWQ2MzgxYmQzMDAyNzU2YmU4ODYxMiIsImlhdCI6MTYzNzcwNzAwNCwiZXhwIjoxNjM3NzkzNDA0fQ.ZiozAL5Fx7pxBC36YUYCIydcU_qeRToYpQyb8hthOc4"
//LIVE
baseURL: string = "https://www.admin.bitconia.com/api/v1/";
headers: any = new HttpHeaders({ "Content-Type": "application/json" });
// headers = new HttpHeaders().set("Content-Type", "application/json")
//       .set("Authorization",this.token)
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
  create_user: string="user/user/signup";
  signupathu:string="user/auth/signup/sent/otp"
  googleathu : string="user/auth/g2f/get";
  googlenable : string="user/auth/g2f/enable";
  googleverify: string="user/auth/g2f/verify";
  googledisable : string="user/auth/g2f/disable";
  loginverify: string="user/auth/verify/otp";
  twofactor: string="user/auth/sent/otp";
  deposithistory:string="user/deposit/list";
  depositqr:string="user/deposit/depositqrcode";
  depositcreate:string="user/deposit/create";
  depositsort:string="user/deposit/status";
  withdraw:string="user/withdraw/list";
  withdrawcreate: string="user/withdraw/create";
  withdrawsort:string="user/withdraw/status";
  drawticket: string="user/draw/alldraw/ticket/list";
  notifi: string="user/user/notification/list";
  alert: string="user/user/alert/list";
  balance: string="user/user/balance";
  card: string="user/cart/add";
  pervdraw:string="user/draw/perviouslist";
  payment:string="user/payment/create";
  profile:string="user/user/update";
  upcominlist:string="user/draw/upcominglist";
  lastdraw:string="user/draw/lastfive_draw";
  allticketList:string="user/draw/alldraw/ticket/list";
  changeemail_mob:string="user/auth/sent/otp";
  verify_otp:string="user/auth/verify/otp";
  addotp:string="user/auth/addsent/otp";
  addverify:string="user/auth/addverify/otp";
  securemail:string="user/auth/security/email";
  securemob:string="user/auth/security/mobile";
  resendotp:string="user/auth/resent/otp";
  drawidwin:string="user/draw/drawbyid/winners";
  mydrawidwin:string="user/draw/mydrawbyid/winners";
  claim:string="user/draw/claim";
  remove:string="user/user/remove";
    constructor(
    public http: HttpClient,
    public router: Router,
    public toastr: ToastrService,

  ) {
    
} 
  errorCallBack(apiResp) {
    if (!apiResp) {
      // this.errorCount++;
      /** spinner ends after 10 seconds */
      if (this.errorCount < 1) {
        // this.toastr.error("Something went wrong..Please try after somtime!")
        this.toastr.error("Please try after somtime!", "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
      }
    }
  }
  getSessionToken() {
    this.tokenId = JSON.parse(localStorage.getItem("data"));
    return this.tokenId;
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
  // //////////debugger
  return this.http.post(this.baseURL + this.userloginurl, jsonObj, {
    headers: this.headers,
  });
}
logoutSession(jsonObj: any): Observable<any> {
  // //////////debugger
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
profileupdate(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.profile, jsonObj, 
    {
      headers: this.getAuthHeaders(),
    });
}
forgetPassword(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.forgetpassword, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
resetPassword(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.resetpassword, jsonObj, {
    // headers: this.getAuthHeaders(),
  });
}
createuser(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.create_user, jsonObj, {
  });
    // ...
    // this.headers.set(key, base);  });
}
g2fa(): Observable<any> {
  return this.http.get(this.baseURL + this.googleathu, {
    headers: this.getAuthHeaders(),
  });
}
g2faenable(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.googlenable, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
g2fverify(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.googleverify, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
g2fdisable(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.googledisable, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
signupotp(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.signupathu, jsonObj);
}
loginotp(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.loginverify, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
twofactorotp(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.twofactor, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}twofactorver(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.loginverify, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
deposithis(): Observable<any> {
  return this.http.get(this.baseURL + this.deposithistory, {
    headers: this.getAuthHeaders(),
  });
}
depositnew(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.depositcreate, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
depositsearch(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.depositsort, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
withdrawhistory(): Observable<any> {
  return this.http.get(this.baseURL + this.withdraw, {
    headers: this.getAuthHeaders(),
  });
}
withdrawnew(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.withdrawcreate, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
withdrawsearch(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.withdrawsort, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
drawhistory(): Observable<any> {
  return this.http.get(this.baseURL + this.drawticket, {
    headers: this.getAuthHeaders(),
  });
}
depositqrcode(): Observable<any> {
  return this.http.get(this.baseURL + this.depositqr, {
    headers: this.getAuthHeaders(),
  });
}
notification(): Observable<any> {
  return this.http.get(this.baseURL + this.notifi, {
    headers: this.getAuthHeaders(),
  });
}
alertnotification(): Observable<any> {
  return this.http.get(this.baseURL + this.alert, {
    headers: this.getAuthHeaders(),
  });
}

balancebtc(): Observable<any> {
  return this.http.get(this.baseURL + this.balance, {
    headers: this.getAuthHeaders(),
  });
}
perviousdraw(): Observable<any> {
  return this.http.get(this.baseURL + this.pervdraw, {
    // headers: this.getAuthHeaders(),
  });
}
cardadd(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.card, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
payadd(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.payment, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
upcomdraw(): Observable<any> {
  return this.http.get(this.baseURL + this.upcominlist, {
    // headers: this.getAuthHeaders(),
  });
}
last_draw(): Observable<any> {
  return this.http.get(this.baseURL + this.lastdraw, {
    headers: this.getAuthHeaders(),
  });
}
all_draw(): Observable<any> {
  return this.http.get(this.baseURL + this.allticketList, {
    headers: this.getAuthHeaders(),
  });
}
changeemailmob(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.changeemail_mob, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}

verfiyemailmob(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.verify_otp, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
addsotp(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.addotp, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
addsverify(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.addverify, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
secuemail(): Observable<any> {
  return this.http.get(this.baseURL + this.securemail,{
    headers: this.getAuthHeaders(),
  });
}
secumob(): Observable<any> { 
  return this.http.get(this.baseURL + this.securemob, {
    headers: this.getAuthHeaders(),
  });
}
reotp(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.resendotp, jsonObj, {
  });
}
drawwin(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.drawidwin, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
mydrawwin(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.mydrawidwin, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
claimwin(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.claim, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}
removeem(jsonObj: any): Observable<any> {
  return this.http.post(this.baseURL + this.remove, jsonObj, {
    headers: this.getAuthHeaders(),
  });
}

}
