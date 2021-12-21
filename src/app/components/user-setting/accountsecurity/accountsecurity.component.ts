import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-accountsecurity',
  templateUrl: './accountsecurity.component.html',
  styleUrls: ['./accountsecurity.component.scss']
})
export class AccountsecurityComponent implements OnInit {
  public changepass: FormGroup;
  userDetails: any = [];
  userID: any;
  public loginForm: FormGroup;
  public g2faForm: FormGroup;
  public proForm: FormGroup;
  public mobileform: FormGroup;
  public emailform: FormGroup;

  submitted = false;
  error: any;
  errorMessage: any;
  qrcode: any;
  secret: any;
  id: any;
  username: any;
  dob: any;
  address: any;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedArabEmirates, CountryISO.India];
  code: any;
  phoneNumber: any;
  mobile: any;
  countrycode: any;
  email: any;
  typemob: any;
  type:any;
  example = { email: ""};
  num:number=0;
  email1: any;
  emailstatus: any;
  mobstatus: any;
  mob1: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) {
    this.id = JSON.parse(localStorage.getItem("id"));
    // this.type = JSON.parse(localStorage.getItem("logintyp"));
    this.type = JSON.parse(localStorage.getItem("logintype"));
console.log(this.type)

  }

  ngOnInit(): void {
    this.createForm();
    this.gfen();
    this.gpro();
    this.mobileForm();
    this.emailForm();
    this.profileupd();
    this.secuemail();
    this.secumob();
    // this.addemail();
    // this.addmob();
  }
  emailForm() {
    this.emailform = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'code': ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'oldcode': ['', [Validators.required, Validators.pattern('[0-9]{4}')]],

    });
  }
  mobileForm() {
    this.mobileform = this.formBuilder.group({
      'oldcode': ['', [Validators.required, Validators.pattern('[0-9]{4}')]],

      'code': ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'phone': [''],

    });
  }
  gfen() {

    this.g2faForm = this.formBuilder.group({
      'otp': ['', [Validators.required, Validators.minLength(10)]],

    });
  }
  gpro() {

    this.proForm = this.formBuilder.group({
      'user': ['', [Validators.required, Validators.minLength(10)]],
      'dob': ['', [Validators.required, Validators.minLength(10)]],
      'address': ['', [Validators.required, Validators.minLength(10)]],

    });
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'oldPass': ['', [Validators.required, Validators.minLength(10)]],
      'newPass': ['', [Validators.required, Validators.minLength(10)]],
      'confirmPass': ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  get loginFormControl() {
    return this.changepass.controls;
  }

  changepassword() {
    this.submitted = true;

    debugger
    if (this.loginForm.value.newPass == this.loginForm.value.confirmPass) {
      let JsonData = {
        "old_password": this.loginForm.value.oldPass,
        "password": this.loginForm.value.newPass,
        // "confirmPass": this.changepass.value.confirmPass,
        // "userId": this.userID,
      }
      this.httpService.changePassword(JsonData).subscribe(res => {
        // ////debugger
        if (res['success'] == true) {
          // this.toastr.success("Password changed Successfully");
          // this.httpService.toastr.success(res['message'], '', {
          //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          // });
          this.routeTo.navigateByUrl('/index');
        }
        // }, (err) => {
        //   // this.httpService.toastr.error(err);
        //   this.httpService.toastr.error("All field is mandatory",
        //     '', {
        //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        //   });
      },
        (error) => {                              //Error callback
          console.log(error)
          this.error = error.status;
          console.log(this.error)

          this.errorMessage = error.error.message;
          console.log(this.errorMessage)
          this.httpService.toastr.error(this.errorMessage, '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
        });

    } else {
      // this.httpService.toastr.error("Password didn't match");
      // this.httpService.toastr.error("Password didn't match",
      //   '', {
      //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      // });
    }
  }
  g2faenabled() {

    this.submitted = true;

    debugger
    let JsonData = {
      "otp": this.g2faForm.value.otp,

    }
    this.httpService.g2faenable(JsonData).subscribe(res => {
      // ////debugger
      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
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
  g2fadisable() {
    this.submitted = true;

    debugger
    let JsonData = {
      "otp": this.g2faForm.value.otp,

    }
    this.httpService.g2fdisable(JsonData).subscribe(res => {
      // ////debugger
      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
        window.location.reload();
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
  }
  g2faverify() {
    this.submitted = true;

    debugger
    let JsonData = {
      "otp": this.g2faForm.value.otp,

    }
    this.httpService.g2fverify(JsonData).subscribe(res => {
      // ////debugger
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
  g2faathu() {
    this.submitted = true;

    debugger

    this.httpService.g2fa().subscribe(res => {
      // ////debugger
      console.log(res['data']['img'])
      console.log(res['data']['secret'])
      this.secret = res['data']['secret']
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

  profileupd() {
    this.submitted = true;

    debugger
    let JsonData = {
      "username": this.proForm.value.user,
      "address": this.proForm.value.address,
      "dob": this.proForm.value.dob,
      "id": this.id
    }
    this.httpService.profileupdate(JsonData).subscribe(res => {
      // ////debugger
      console.log(res['data']['username'])
      console.log(res['data']['dob'])
      console.log(res['data']['address'])
      this.username = res['data']['username']
      this.dob = res['data']['dob']
      this.address = res['data']['address']

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

  changeemailmob() {
    // this.submitted = true;
this.email=this.emailform.value.email
    debugger
    let JsonData = {
      "email": this.emailform.value.email,
      "mobile": "",
      "country_code": "",
    }
    this.httpService.changeemailmob(JsonData).subscribe(res => {
      // ////debugger
      console.log(res)
      console.log(res['data'])
      console.log(res['data']['address'])
      this.username = res['data']['username']
      this.dob = res['data']['dob']
      this.address = res['data']['address']

      
      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
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
  }
  changemob() {
    // debugger
    console.log(this.mobileform.value);
    this.code = this.mobileform.value;
    console.log(this.code['phone']);
    this.phoneNumber = this.code['phone']

    this.mobile = this.code['phone']['number'];
    this.num =this.mobile;
    this.countrycode = this.code['phone']['dialCode'];
    // localStorage.setItem("countrycode", JSON.stringify( this.countrycode));
    // localStorage.setItem("mobile", JSON.stringify(this.mobile));
    console.log(this.num);

    console.log(this.countrycode);
    console.log(this.mobile);
    this.submitted = true;

    debugger
    let JsonData = {
      "email": "",
      mobile:8667621266,
      "country_code": this.countrycode,
    }
    this.httpService.changeemailmob(JsonData).subscribe(res => {
      // ////debugger
      console.log(res)
      console.log(res['data'])
      console.log(res['data']['address'])
      this.username = res['data']['username']
      this.dob = res['data']['dob']
      this.address = res['data']['address']

      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
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
  }
  verfiyemailmob() {
    this.submitted = true;

    debugger
    let JsonData = {
      "email": this.emailform.value.email,
      "mobile": "",
      "country_code": "",
      "pin": this.emailform.value.code,
      "oldpin": this.emailform.value.oldcode,
    }
    this.httpService.verfiyemailmob(JsonData).subscribe(res => {
      // ////debugger
      console.log(res)
      //         console.log(res['data'])
      //         console.log(res['data']['address'])
      // this.username=res['data']['username']
      // this.dob=res['data']['dob']
      // this.address=res['data']['address']

      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
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
this.httpService.toastr.error(this.errorMessage,'Status:400',  {
        positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
      });
   })
  }

  verfiymob() {
    console.log(this.mobileform.value);
    this.code = this.mobileform.value;
    console.log(this.code['phone']);
    this.phoneNumber = this.code['phone']

    this.mobile = this.code['phone']['number'];
    // this.country =  idex['countryCode'];
    this.countrycode = this.code['phone']['dialCode'];
    // localStorage.setItem("countrycode", JSON.stringify( this.countrycode));
    // localStorage.setItem("mobile", JSON.stringify(this.mobile));
    console.log(this.countrycode);
    console.log(this.mobile);
    this.submitted = true;

    debugger
    let JsonData = {
      "email": "",
      "mobile": this.mobile,
      "country_code": this.countrycode,
      "pin": this.mobileform.value.code,
      "oldpin": this.mobileform.value.oldcode,
    }
    this.httpService.verfiyemailmob(JsonData).subscribe(res => {
      // ////debugger
      console.log(res)
      //         console.log(res['data'])
      //         console.log(res['data']['address'])
      // this.username=res['data']['username']
      // this.dob=res['data']['dob']
      // this.address=res['data']['address']

      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
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
this.httpService.toastr.error(this.errorMessage,'Status:400',  {
        positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
      });
   })
  }
  addemail() {
    // this.submitted = true;
this.email=this.emailform.value.email
    debugger
    let JsonData = {
      "email": this.emailform.value.email,
      "mobile": "",
      "country_code": "",
    }
    this.httpService.addsotp(JsonData).subscribe(res => {
      // ////debugger
      console.log(res)
      console.log(res['data'])
      console.log(res['data']['address'])
      this.username = res['data']['username']
      this.dob = res['data']['dob']
      this.address = res['data']['address']

      
      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
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
  }
  addmob() {
    // this.submitted = true;
    console.log(this.mobileform.value);
    this.code = this.mobileform.value;
    console.log(this.code['phone']);
    this.phoneNumber = this.code['phone']

    this.mobile = this.code['phone']['number'];
    // this.country =  idex['countryCode'];
    this.countrycode = this.code['phone']['dialCode'];
    // localStorage.setItem("countrycode", JSON.stringify( this.countrycode));
    // localStorage.setItem("mobile", JSON.stringify(this.mobile));
    console.log(this.countrycode);
    console.log(this.mobile);
        debugger
        let JsonData = {
          "email": "",
          "mobile": this.mobile,
          "country_code": this.countrycode,
        }
    this.httpService.addsotp(JsonData).subscribe(res => {
      // ////debugger
      console.log(res)
      console.log(res['data'])
      console.log(res['data']['address'])
      this.username = res['data']['username']
      this.dob = res['data']['dob']
      this.address = res['data']['address']

      
      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
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
  }
  verfaddemail() {
    // console.log(this.mobileform.value);
    // this.code = this.mobileform.value;
    // console.log(this.code['phone']);
    // this.phoneNumber = this.code['phone']

    // this.mobile = this.code['phone']['number'];
    // // this.country =  idex['countryCode'];
    // this.countrycode = this.code['phone']['dialCode'];
    // localStorage.setItem("countrycode", JSON.stringify( this.countrycode));
    // localStorage.setItem("mobile", JSON.stringify(this.mobile));
    console.log(this.countrycode);
    console.log(this.mobile);
    this.submitted = true;

    debugger
    let JsonData = {
      "email": this.emailform.value.email,
      "mobile": "",
      "country_code":"",
      "pin":this.emailform.value.code,
      // "oldpin": this.mobileform.value.oldcode,
    }
    this.httpService.addsverify(JsonData).subscribe(res => {
      // ////debugger
      console.log(res)
      //         console.log(res['data'])
      //         console.log(res['data']['address'])
      // this.username=res['data']['username']
      // this.dob=res['data']['dob']
      // this.address=res['data']['address']

      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
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
this.httpService.toastr.error(this.errorMessage,'Status:400',  {
        positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
      });
   })
  }verfaddmob() {
    console.log(this.mobileform.value);
    this.code = this.mobileform.value;
    console.log(this.code['phone']);
    this.phoneNumber = this.code['phone']

    this.mobile = this.code['phone']['number'];
    // this.country =  idex['countryCode'];
    this.countrycode = this.code['phone']['dialCode'];
    // localStorage.setItem("countrycode", JSON.stringify( this.countrycode));
    // localStorage.setItem("mobile", JSON.stringify(this.mobile));
    console.log(this.countrycode);
    console.log(this.mobile);
    this.submitted = true;

    debugger
    let JsonData = {
      "email": "",
      "mobile": this.mobile,
      "country_code": this.countrycode,
      "pin": this.mobileform.value.code,
      "oldpin": this.mobileform.value.oldcode,
    }
    this.httpService.addsverify(JsonData).subscribe(res => {
      // ////debugger
      console.log(res)
      //         console.log(res['data'])
      //         console.log(res['data']['address'])
      // this.username=res['data']['username']
      // this.dob=res['data']['dob']
      // this.address=res['data']['address']

      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
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
this.httpService.toastr.error(this.errorMessage,'Status:400',  {
        positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
      });
   })
  }

  
  secuemail() {

   
    this.httpService.secuemail().subscribe(res => {
      // ////debugger
      console.log(res['data'])
      console.log(res['data']['username'])
      console.log(res['data']['dob'])
      console.log(res['data']['address'])
      if(res['data']['security_email'] == true){

      this.username = res['data']['username']
      this.dob = res['data']['dob']
      this.address = res['data']['address']
      this.email1 = res['data']['email']
      this.emailstatus = res['data']['security_email']
      // this.mobstatus = res['data']['security_mobile']
      }
      
      
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
  secumob() {

   
    this.httpService.secumob().subscribe(res => {
      // ////debugger
      console.log(res['data'])
      if(res['data']['security_mobile']== true){
      console.log(res['data']['username'])
      console.log(res['data']['dob'])
      console.log(res['data']['address'])
      this.username = res['data']['username']
      this.dob = res['data']['dob']
      this.address = res['data']['address']
      this.mob1 = res['data']['mobile']
      // this.emailstatus = res['data']['security_email']
      this.mobstatus = res['data']['security_mobile']

      }
      
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
