import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
import { HttpService } from '../../service/http.service';
import { PasswordStrengthService } from '../../service/password-strength.service';
import Swal from 'sweetalert2';
function refresh() {
 window .location.reload();
}
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-accountsecurity',
  templateUrl: './accountsecurity.component.html',
  styleUrls: ['./accountsecurity.component.scss']
})
export class AccountsecurityComponent implements OnInit {
  email2: any;
  con: string;
  get nativeWindow() : any {
    return refresh();
 }
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
  mob1:string;
  sec: any;
  secemail: any;
  user:any;
  twofa: any;
  secemob: any;
  fileToUpload: File;
  imageUrl: any;
  signin_logo: any;
  form: any;
  FavIcon: any;
  img: any;
  public browserRefresh: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,
    private loader: NgxUiLoaderService,
private toastr:ToastrService,

    public httpService: HttpService,
  ) {
    this.id = JSON.parse(localStorage.getItem("id"));
        this.user = JSON.parse(localStorage.getItem("userid"));
        // this.twofa = JSON.parse(localStorage.getItem("2fa"));
        this.secemail = JSON.parse(localStorage.getItem("email"));
        this.secemob = JSON.parse(localStorage.getItem("mobile"));
        // this.img = JSON.parse(localStorage.getItem("Image"));

    // this.type = JSON.parse(localStorage.getItem("logintyp"));
    this.type = JSON.parse(localStorage.getItem("logintype"));
    // this.sec = JSON.parse(localStorage.getItem("secret"));
    // this.secemail = JSON.parse(localStorage.getItem("secemail"));
    
console.log(this.user)
this.createForm();
this.gfen();
this.gpro();
this.mobileForm();
this.emailForm();
  }
  refresh(): void {
  this.loader.start();
  }
  ngOnInit() {
   
    this.profileupd();
      if(this.type=="email"){   
          this.httpService.secuemail().subscribe(res => {
            // //////////debugger
            this.loader.start();

            console.log(res['data'])
            console.log(res['data']['username'])
            console.log(res['data']['dob'])
            console.log(res['data']['address'])
            if(res['data']['security_email'] == true){
      
            this.username = res['data']['username']
            this.dob = res['data']['dob']
            this.address = res['data']['address']
            this.email1 = res['data']['email']
            this.email2 = res['data']['security_email']

            this.mob1 = res['data']['mobile']
            this.con = res['data']['country_code']
            console.log(this.con)
            // localStorage.setItem("email", JSON.stringify(res['admin']['security_email']));
            // localStorage.setItem("mobile", JSON.stringify(res['admin']['security_mobile']));
            // localStorage.setItem("2fa", JSON.stringify(res['admin']['tfa_active']));
            this.emailstatus = res['data']['security_email']
            this.mobstatus = res['data']['security_mobile']     
             this.twofa = res['data']['tfa_active']
      
            localStorage.setItem("username", JSON.stringify(this.username));
      
            }

            
            if (res['success'] == true) {
              this.loader.stop();

            //  window.location.reload();
      
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
        }      
         else if(this.type=="mobile"){   
      
          this.httpService.secumob().subscribe(res => {
            // //////////debugger
            console.log(res['data'])
            if(res['data']['security_mobile']== true){
            console.log(res['data']['username'])
            console.log(res['data']['dob'])
            console.log(res['data']['address'])
            this.username = res['data']['username']
            this.dob = res['data']['dob']
            this.address = res['data']['address']
            this.mob1 = res['data']['mobile']
            this.email1 = res['data']['email']
            this.email2 = res['data']['security_email']
            // localStorage.setItem("secemail", JSON.stringify(this.email1));
            // localStorage.setItem("username", JSON.stringify(this.username));
            this.con = res['data']['country_code']
            console.log(this.con)
            this.emailstatus = res['data']['security_email']
            this.mobstatus = res['data']['security_mobile']
            this.twofa = res['data']['tfa_active']
      
            }
            
            if (res['success'] == true) {
            //  window.location.reload();
      
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
          
          }
        
        
   
    // this.g2faathu();
    // this.addemail();
    // this.addmob();
  }
 ngOnDestroy(){
  this.nativeWindow();
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
      'oldPass': ['', [Validators.required, Validators.minLength(6),PasswordStrengthService]],
      'newPass': ['', [Validators.required, Validators.minLength(6),PasswordStrengthService]],
      'confirmPass': ['', [Validators.required, Validators.minLength(6),PasswordStrengthService]],
    });
  }
  get loginFormControl() {
    return this.changepass.controls;
  }

  changepassword() {

    this.submitted = true;

    //debugger
    if (this.loginForm.value.newPass == this.loginForm.value.confirmPass) {
      let JsonData = {
        "old_password": this.loginForm.value.oldPass,
        "password": this.loginForm.value.newPass,
        // "confirmPass": this.changepass.value.confirmPass,
        // "userId": this.userID,
      }
      this.httpService.changePassword(JsonData).subscribe(res => {
        // //////////debugger
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
  g2fadisable() {
    this.submitted = true;
    this.loader.start();

    //////debugger
    let JsonData = {
      "otp": this.g2faForm.value.otp,

    }
    this.httpService.g2fdisable(JsonData).subscribe(res => {
      // //////////debugger
      this.loader.stop();

      if (res['success'] == true) {
        // this.toastr.success("Password changed Successfully");
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.routeTo.navigateByUrl('/user-setting/accountsecurity');
        window.location.reload();
        localStorage.removeItem('secret');

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

    //////debugger
    let JsonData = {
      "otp": this.g2faForm.value.otp,

    }
    this.httpService.g2fverify(JsonData).subscribe(res => {
      // //////////debugger
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

  profileupd() {
    this.submitted = true;

    //////debugger
    let JsonData = {
      "username": this.proForm.value.user,
      "address": this.proForm.value.address,
      "dob": this.proForm.value.dob,
      "id": this.id
    }
    this.httpService.profileupdate(JsonData).subscribe(res => {
      // //////////debugger
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
    //////debugger
    let JsonData = {
      "email": this.emailform.value.email,
      "mobile": "",
      "country_code": "",
    }
    this.httpService.changeemailmob(JsonData).subscribe(res => {
      // //////////debugger
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
    // //////debugger
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

    //////debugger
    let JsonData = {
      "email": "",
      mobile:8667621266,
      "country_code": this.countrycode,
    }
    this.httpService.changeemailmob(JsonData).subscribe(res => {
      // //////////debugger
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

    //////debugger
    let JsonData = {
      "email": this.emailform.value.email,
      "mobile": "",
      "country_code": "",
      "pin": this.emailform.value.code,
      "oldpin": this.emailform.value.oldcode,
    }
    this.httpService.verfiyemailmob(JsonData).subscribe(res => {
      // //////////debugger
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
       // document.location.reload();
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

    //////debugger
    let JsonData = {
      // "email": "",
      "mobile": this.mobile,
      "country_code": this.countrycode,
      "pin": this.mobileform.value.code,
      "oldpin": this.mobileform.value.oldcode,
    }
    this.httpService.verfiyemailmob(JsonData).subscribe(res => {
      // //////////debugger
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
        window.location.reload();
        // this.refresh();

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
    //////debugger
    let JsonData = {
      "email": this.emailform.value.email,
      "mobile": "",
      "country_code": "",
    }
    this.httpService.changeemailmob(JsonData).subscribe(res => {
      // //////////debugger
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
        //////debugger
        let JsonData = {
          "email": "",
          "mobile": this.mobile,
          "country_code": this.countrycode,
        }
    this.httpService.addsotp(JsonData).subscribe(res => {
      // //////////debugger
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

    //////debugger
    let JsonData = {
      "email": this.emailform.value.email,
      "mobile": "",
      "country_code":"",
      "pin":this.emailform.value.code,
      // "oldpin": this.mobileform.value.oldcode,
    }
    this.httpService.addsverify(JsonData).subscribe(res => {
      // //////////debugger
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
        window.location.reload();
        // this.refresh();

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
  verfaddmob() {
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

    //////debugger
    let JsonData = {
      "email": "",
      "mobile": this.mobile,
      "country_code": this.countrycode,
      "pin": this.mobileform.value.code,
      "oldpin": this.mobileform.value.oldcode,
    }
    this.httpService.addsverify(JsonData).subscribe(res => {
      this.loader.start();
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
        this.loader.stop();
        window.location.reload();
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

  
  
  removeem() {

    //////debugger
    // console.log(this.mobileform.value);
    // this.code = this.mobileform.value;
    // console.log(this.code['phone']);
    // this.phoneNumber = this.code['phone']

    // this.mobile = this.code['phone']['number'];
    // // this.country =  idex['countryCode'];
    // this.countrycode = this.code['phone']['dialCode'];
    // // localStorage.setItem("countrycode", JSON.stringify( this.countrycode));
    // // localStorage.setItem("mobile", JSON.stringify(this.mobile));
    // console.log(this.countrycode);
    // console.log(this.mobile);
    this.submitted = true;
if(this.emailstatus!=false || this.mob1!=null ){
    //////debugger
    let JsonData = {
      "email": "",
      "mobile": this.mob1,
     
    }
    this.httpService.removeem(JsonData).subscribe(res => {
      // //////////debugger
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
        window.location.reload();
        // this.refresh();

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
//      (error) => {                              //Error callback
//       console.log(error)
//       this.error = error.status;
//       console.log(this.error)

//       this.errorMessage = error.error.message;
//       console.log(this.errorMessage)
// this.httpService.toastr.error(this.errorMessage,'Status:400',  {
//         positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
//       });
//    })
  }
  
  removee() {
    //////debugger
    
    this.submitted = true;
if(this.mobstatus!=false || this.email1!=null ){
    //////debugger
    let JsonData = {
      "email": this.email1,
      "mobile": "",
     
    }
    this.httpService.removeem(JsonData).subscribe(res => {
      // //////////debugger
      console.log(res)
     

      if (res['success'] == true) {
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        window.location.reload();
        // this.refresh();

      }
   
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
//      (error) => {                              //Error callback
//       console.log(error)
//       this.error = error.status;
//       console.log(this.error)

//       this.errorMessage = error.error.message;
//       console.log(this.errorMessage)
// this.httpService.toastr.error(this.errorMessage,'Status:400',  {
//         positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
//       });
//    })
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
}
handleFile(files: FileList) {
    this.fileToUpload = files.item(0);
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.FavIcon = event.target.result;
    }
    // localStorage.setItem("Image", JSON.stringify(this.FavIcon));

    reader.readAsDataURL(this.fileToUpload);
}
handle(files: FileList) {
    this.fileToUpload = files.item(0);
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.signin_logo = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
}
uploadFiles( system_logo ) {
        console.log( 'file', system_logo )
        for ( let i = 0; i < system_logo.length; i++ ) {
// this.image=system_logo[i]['name']
            // this.formData.append( "file", system_logo[i], system_logo[i]['name'] );
        }
    }
upload(event) {
  ////////debugger
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      img: file
    });
    this.form.get('img').updateValueAndValidity()
 }
 showWarningAlert() {
  Swal.fire('Hey!', 'Please Enable Mobile Or Email', 'warning')
}
 twofactoremail() {
    //////debugger
      // localStorage.clear();
      this.submitted=true;
      let jsonData = {
        email: this.email1 ,
        mobile:"",
        country_code:"",
        // pin:this.loginForm.value.code,

        // device:'1',
        // location:'Chennai',
        // ip:'162.198.5.46',
      }
      this.httpService.reotp(jsonData).subscribe((res: any) => {
        
        if (res['success'] == true) {
          // localStorage.setItem("data", JSON.stringify(res['data']['pin']));
console.log(res['data']['pin'])
          this.httpService.toastr.success(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
  
          this.router.navigate(['/user-control/twofactor']);
          // this.router.navigate(['/dashboard/dashboard']);
  
  
        }
         else if (res['success'] == false) {
        
          // this.httpService.toastr.error(res['message'], '', {
          //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
          // });
        }
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
    towfactormob() {
      //////debugger
        this.submitted=true;
        //////debugger
    //     console.log(this.mobileform.value);
    //     this.code = this.mobileform.value;
    //     console.log( this.code['phone']);
    // this.phoneNumber=this.code['phone']
    
    //         this.mobile =  this.code['phone']['number'];
    //         // this.country =  idex['countryCode'];
    //         this.countrycode =  this.code['phone']['dialCode'];
          
    //         console.log( this.countrycode);
    //         console.log( this.mobile);
          //////debugger
          this.submitted=true;
          let jsonData = {
            email:"",
            mobile: this.mob1,
            country_code:this.con,
            // pin:this.mobileform.value.code,
            
            //         device:'1',
            // location:'Chennai',
            // ip:'162.198.5.46',
          }
        this.httpService.reotp(jsonData).subscribe((res: any) => {
          
          if (res['success'] == true) {
            
            this.httpService.toastr.success(res['message'], '', {
              positionClass: 'toast-bottom-right', closeButton: true, timeOut: 1000
            });
    
            // this.router.navigate(['/user-control/twofactor']);
            // this.router.navigate(['/dashboard/dashboard']);
    
    
          }
           else if (res['success'] == false) {
          
            // this.httpService.toastr.error(res['message'], '', {
            //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
            // });
          }
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
      veraddemail() {
        //debugger
          this.submitted = true;
      
          //////debugger
          // if(this.data =="false"|| this.data ==undefined){
          let JsonData = {
            "email":  this.email1,
            "mobile": "",
            "country_code":"",
            "pin":this.loginForm.value.code,
            // "oldpin": this.mobileform.value.oldcode,
          }
          this.httpService.addsverify(JsonData).subscribe(res => {
            console.log(res)
            if (res['success'] == true) {
              localStorage.setItem("Securityverf", JSON.stringify("true"));

              // this.toastr.success("Password changed Successfully");
              this.httpService.toastr.success(res['message'], '', {
                positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
              });
              this.routeTo.navigateByUrl('/index');
            }
       
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
        // }
        // else if(this.data !="false"){
        //   //////debugger
        //      this.g2faverifyemail();
        // }
        }
        veraddmob() {
          //debugger
          this.submitted = true;
          // if(this.data =="false" || this.data ==undefined){
          //////debugger
          let JsonData = {
            "email": "",
            mobile: this.mob1,
            country_code:this.con,
            pin:this.mobileform.value.code,
            // "oldpin": this.mobileform.value.oldcode,
          }
          this.httpService.addsverify(JsonData).subscribe(res => {
            console.log(res)
            if (res['success'] == true) {

              // this.toastr.success("Password changed Successfully");
              this.httpService.toastr.success(res['message'], '', {
                positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
              });
              this.routeTo.navigateByUrl('/user-setting/googlesecurity');

              
              // setTimeout(() => {
              //  // document.location.reload();
                
              //    }, 100);
            }
       
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
}     

