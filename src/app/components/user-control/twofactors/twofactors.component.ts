import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { version } from 'process';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
// import { SlideControlComponent } from 'ng-spc';
import { ControlService, ControlInput, Result, VertifyQuery  } from '../../service/control.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommondataService } from '../../service/commondata.service';
import { HttpService } from '../../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { PasswordStrengthService } from '../../service/password-strength.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-twofactors',
  templateUrl: './twofactors.component.html',
  styleUrls: ['./twofactors.component.scss']
})
export class TwofactorsComponent implements OnInit {
  public loginForm: FormGroup;
  submitted: boolean;
  public mobileform: FormGroup;
  code: any;
  phoneNumber: any;
  mobile: any;
  countrycode: any;
  email: any;
  error: any;
  errorMessage: any;
  emailid: any;
  type: any;
  data: any;
  userdetails: any;
  act: any;

  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public dialog: MatDialog,
    private el: ElementRef,
    private controlService: ControlService,
    public sharedata:CommondataService,
    public httpService: HttpService,
    private loader:NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.mobileForm();
    this.emailid  = JSON.parse(localStorage.getItem("userid"));
    this.userdetails  = JSON.parse(localStorage.getItem("userdetails"));

    this.countrycode  = JSON.parse(localStorage.getItem("countrycode"));
    this.mobile  = JSON.parse(localStorage.getItem("mobile"));
    this.type = JSON.parse(localStorage.getItem("logintype"));

    console.log(this.countrycode)
    console.log(this.mobile)
    console.log(this.userdetails['admin']['tfa_active'])
this.act=this.userdetails['admin']['tfa_active']
console.log(this.emailid)
    if(history.state.data){
      // this.data=[];
    //  this.counter=history.state.data.key
     this.data=history.state.data.values
     console.log(this.data)
    // this.editcount=history.state.data.key
    this.countrycode=history.state.data.value
    this.mobile=history.state.data.vale

      // this.quickdata = this.quick.get(0)
      console.log("90",history.state.data)
console.log("92",this.countrycode)
console.log("84",this.mobile)

    }
    if(history.state.data){
      // this.data=[];
    //  this.counter=history.state.data.key
    //  this.data=history.state.data.value
    // this.editcount=history.state.data.key
    this.email=history.state.data.value
    

      // this.quickdata = this.quick.get(0)
      console.log("90",history.state.data)
console.log("92",this.email)


    }
  //   this.router.navigateByUrl('/header', { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['']);
  // }); 
  // this.reloadCurrentRoute();
  // this.refersh();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': [null, Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthService])],
        'code':['', Validators.compose([Validators.required,Validators.pattern(
          '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
            )])]

    });
  }
  mobileForm() {
    this.mobileform = this.formBuilder.group({
      
      'code':['', Validators.compose([Validators.required,Validators.pattern(
        '(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})'
          )])],
                'password': ['', [Validators.required, Validators.minLength(6),PasswordStrengthService]],
     'phone': [''],

    });
  }
  twofactoremail() {
    //////debugger
      // localStorage.clear();
      this.submitted=true;
      let jsonData = {
        email: this.emailid ,
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
this.httpService.toastr.error(this.errorMessage,' ',  {
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
            mobile: this.mobile,
            country_code:this.countrycode,
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
  this.httpService.toastr.error(this.errorMessage,' ',  {
            positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
          });
       })
        
    
      }
     
    //   twofactemailotp() {
           
    //     //////debugger
    //       this.submitted=true;
    //       let jsonData = {
    //         email: this.email,
    //         mobile:"",
    //         country_code:"",
    //         pin:this.loginForm.value.code,
    //       }
    //       this.httpService.twofactorver(jsonData).subscribe( res => {
            
    //         if (res['success'] == true) {
    //           localStorage.setItem("pin", JSON.stringify(res['data']['pin']));

    //           // ls.set('userPass', { data: this.loginForm.value.password });
    //           console.log(res);
             
    //           this.httpService.toastr.success(res['message'], '', {
    //             positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
    //           });

    //           // this.router.navigate(['/index']);
    //           // this.router.navigate(['/dashboard/dashboard']);
    //      setTimeout(() => {
    //      // document.location.reload();
    //       this.router.navigate(['/index']);

    //     }, 100);
    //         }
    //          else if (res['success'] == false) {
            
    //           // this.httpService.toastr.error(res['message'], '', {
    //           //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
    //           // });
    //         }
    //       }, (error) => {                              //Error callback
    //         console.log(error)
    //         this.error = error.status;
    //         console.log(this.error)
    
    //         this.errorMessage = error.error.message;
    //         console.log(this.errorMessage)
    // this.httpService.toastr.error(this.errorMessage,' ',  {
    //           positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
    //         });
    //      })
          
      
    //     }
    //     twofactmobotp() {
           
    //       //////debugger
    //       this.submitted=true;
    //       let jsonData = {
    //         email:"",
    //         mobile: this.mobile,
    //         country_code:this.countrycode,
    //         pin:this.mobileform.value.code,
            
    //         //         device:'1',
    //         // location:'Chennai',
    //         // ip:'162.198.5.46',
    //       }
    //         this.httpService.twofactorver(jsonData).subscribe( res => {
              
    //           if (res['success'] == true) {
    //             // ls.set('userPass', { data: this.loginForm.value.password });
    //             console.log(res);
               
    //             this.httpService.toastr.success(res['message'], '', {
    //               positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
    //             });
    //             this.router.navigate(['/index']);

    //             setTimeout(() => {
    //              // document.location.reload();
        
    //             }, 100);                // this.router.navigate(['/dashboard/dashboard']);
        
        
    //           }
    //            else if (res['success'] == false) {
              
    //             // this.httpService.toastr.error(res['message'], '', {
    //             //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
    //             // });
    //           }
    //         }, (error) => {                              //Error callback
    //           console.log(error)
    //           this.error = error.status;
    //           console.log(this.error)
      
    //           this.errorMessage = error.error.message;
    //           console.log(this.errorMessage)
    //   this.httpService.toastr.error(this.errorMessage,' ',  {
    //             positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
    //           });
    //        })
            
        
    //       }
  
          verfaddemail() {
          //debugger
            this.submitted = true;
        
            //////debugger
            // if(this.data =="false"|| this.data ==undefined){
            let JsonData = {
              "email":  this.email,
              "mobile": "",
              "country_code":"",
              "pin":this.loginForm.value.code,
              // "oldpin": this.mobileform.value.oldcode,
            }         
               this.httpService.addsverify(JsonData).subscribe(res => {
              console.log(res)
              if (res['success'] == true) {

                localStorage.setItem("Securityverf", JSON.stringify("true"));


                this.httpService.toastr.success(res['message'], '', {
                  positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
                });
                this.routeTo.navigateByUrl('/index');
                setTimeout(() => {
                  document.location.reload();
                   
                    }, 100);
              }
         
            }, (error) => {                              //Error callback
              console.log(error)
              this.error = error.status;
              console.log(this.error)
        
              this.errorMessage = error.error.message;
              console.log(this.errorMessage)
        this.httpService.toastr.error(this.errorMessage,' ',  {
                positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
              });
           })
          // }
          // else if(this.data !="false"){
          //   //////debugger
          //      this.g2faverifyemail();
          // }
          }
          verfaddmob() {
            //debugger
            this.submitted = true;
            // if(this.data =="false" || this.data ==undefined){
            //////debugger
            let JsonData = {
              "email": "",
              mobile: this.mobile,
              country_code:this.countrycode,
              pin:this.mobileform.value.code,
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
                setTimeout(() => {
                 document.location.reload();
                  
                   }, 100);
              }
         
            }, (error) => {                              //Error callback
              console.log(error)
              this.error = error.status;
              console.log(this.error)
        
              this.errorMessage = error.error.message;
              console.log(this.errorMessage)
        this.httpService.toastr.error(this.errorMessage,' ',  {
                positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
              });
           })
          }
          // } else if(this.data =="true"){
          //    this.g2faverifymob();
          // }
          // }
          // g2faverifymob() {
          //   this.submitted = true;
        
          //   //////debugger
          //   let JsonData = {
          //     "email": "",
          //     mobile: this.mobile,
          //     country_code:this.countrycode,
          //     "otp":this.mobileform.value.code,
          //   }
          //   this.httpService.g2fverify(JsonData).subscribe(res => {
          //     // //////////debugger
          //     if (res['success'] == true) {
          //       this.routeTo.navigateByUrl('/index');
          //       setTimeout(() => {
          //        // document.location.reload();
                  
          //          }, 100);
          //     }
          //     // }, (err) => {
          //     //   // this.httpService.toastr.error(err);
          //     //   this.httpService.toastr.error("All field is mandatory",
          //     //     '', {
          //     //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          //     //   });
          //   })
          //   {
          //   }
          // }
          
          // g2faverifyemail() {
          //   this.submitted = true;
          //   let JsonData = {
          //     "email":this.email,
          //     "mobile":"",
          //     "otp": this.loginForm.value.code,
        
          //   }
          //   this.httpService.g2fverify(JsonData).subscribe(res => {
            
          //     if (res['success'] == true) {

          //       this.httpService.toastr.success("OTP Verified", '', {
          //         positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          //       });
          //       // this.routeTo.navigateByUrl('/index');
          //       setTimeout(() => {
          //        // document.location.reload();
                  
          //          }, 100);
          //     }
          //     // }, (err) => {
          //     //   // this.httpService.toastr.error(err);
          //     //   this.httpService.toastr.error("All field is mandatory",
          //     //     '', {
          //     //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          //     //   });
          //   })
          //   {
          //   }
          // }
        //   verfaddmob() {
        //     //////debugger
          
        //     this.submitted = true;
        
        //     //////debugger
        //     let JsonData = {
        //       "email": "",
        //       mobile: this.mobile,
        //     country_code:this.countrycode,
        //     pin:this.mobileform.value.code,
        //     }
        //     this.httpService.addsverify(JsonData).subscribe(res => {
        //       console.log(res)
           
        
        //       if (res['success'] == true) {
        //         // this.toastr.success("Password changed Successfully");
        //         this.httpService.toastr.success(res['message'], '', {
        //           positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        //         });
        //         this.routeTo.navigateByUrl('/index');
        //       }
            
        //     }, (error) => {                              //Error callback
        //       console.log(error)
        //       this.error = error.status;
        //       console.log(this.error)
        
        //       this.errorMessage = error.error.message;
        //       console.log(this.errorMessage)
        // this.httpService.toastr.error(this.errorMessage,' ',  {
        //         positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
        //       });
        //    })
        //   }
   

}
