import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-googlesecurity',
  templateUrl: './googlesecurity.component.html',
  styleUrls: ['./googlesecurity.component.scss']
})
export class GooglesecurityComponent implements OnInit {
  submitted: boolean;
  error: any;
  errorMessage: any;
  secret: any;
  qrcode: any;
  type: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,
    private loader: NgxUiLoaderService,
private toastr:ToastrService,

    public httpService: HttpService,
  ) {
    this.type = JSON.parse(localStorage.getItem("logintype"));

   }
  
  public g2faForm: FormGroup;

  ngOnInit(): void {
    this.gfen();
    this.g2faathu();
  }
  gfen() {

    this.g2faForm = this.formBuilder.group({
      'otp': ['', [Validators.required, Validators.minLength(10)]],

    });
  }
  gm2faenabled() {

    this.submitted = true;

    //debugger
    let JsonData = {
      // "email":"",
      // "mobile":this.mob1,
      // "country_code":this.con,
      "otp": this.g2faForm.value.otp,

    }
    this.httpService.g2faenable(JsonData).subscribe(res => {
      // //////////debugger
      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        window.location.reload();
        // this.routeTo.navigateByUrl('/index');
      }
      // }, (err) => {
      //   // this.httpService.toastr.error(err);
      //   this.httpService.toastr.error("All field is mandatory",
      //     '', {
      //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      //   });
    }, (error) => {                              //Error callback
      console.log(error)
      this.error = error.status;
      console.log(this.error)

      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
      this.httpService.toastr.error(this.errorMessage, 'Status:400', {
        positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      });
    })
    //  this.g2faenabled();


  }
  g2faenabled() {
//debugger
    this.submitted = true;
    this.loader.start();

    //////debugger
    let JsonData = {
      // "mobile":"",
      // "email":this.email1,
      "otp": this.g2faForm.value.otp,

    }
    this.httpService.g2faenable(JsonData).subscribe(res => {
      // //////////debugger
      this.loader.stop();

      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        this.routeTo.navigateByUrl('user-setting/accountsecurity');
      }
      // }, (err) => {
      //   // this.httpService.toastr.error(err);
      //   this.httpService.toastr.error("All field is mandatory",
      //     '', {
      //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      //   });
    }, (error) => {                              //Error callback
      console.log(error)
      this.error = error.status;
      console.log(this.error)

      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
      this.httpService.toastr.error(this.errorMessage, 'Status:400', {
        positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      });
    })
    //  this.g2faenabled();


  }
  g2faathu() {
    this.submitted = true;

    //////debugger

    this.httpService.g2fa().subscribe(res => {
      // //////////debugger
      console.log(res['data']['img'])
      console.log(res['data']['secret'])
      this.secret = res['data']['secret']
      localStorage.setItem("secret", JSON.stringify(this.secret));

      this.qrcode = res['data']['img']
      if (res['success'] == true) {

        // this.toastr.success("Password changed Successfully");
        // this.httpService.toastr.success(res['message'], '', {
        //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        // });
        // this.routeTo.navigateByUrl('/index');
      }
      // }, (err) => {
      //   // this.httpService.toastr.error(err);
      //   this.httpService.toastr.error("All field is mandatory",
      //     '', {
      //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      //   });
    })
    {
    }
  }
}
