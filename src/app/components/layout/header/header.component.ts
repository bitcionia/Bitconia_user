import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { version } from 'process';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, Inject } from '@angular/core';
// import { SlideControlComponent } from 'ng-spc';
import { ControlService, ControlInput, Result, VertifyQuery  } from '../../service/control.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommondataService } from '../../service/commondata.service';
import { HttpService } from '../../service/http.service';
import { ActivatedRoute, Router, NavigationEnd, ActivationEnd, RoutesRecognized } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { PasswordStrengthService } from '../../service/password-strength.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../../service/notification.service';
// import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';

import { AuthencationGuard } from '../../service/authencation.guard.service';
import { filter, pairwise } from 'rxjs/operators';
import { NavigationService } from '../../service/navigation.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
function refresh() {
 // window .location.reload();
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  secuemail: any;
  secumob: any;
  get nativeWindow() : any {
    return refresh();
 }
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] =[CountryISO.UnitedArabEmirates, CountryISO.India];
	// phoneForm = new FormGroup({
	// 	phone: new FormControl(undefined, [Validators.required])
  // });

  siteKey:string="6LeB_cUcAAAAAOvGthvHU_Yk6q0f8_QOwPi7X8_a"
  // @ViewChild(SlideControlComponent, {static: true})
  // slide: SlideControlComponent;
  counterValue = 0;
  public loginForm: FormGroup;

data:any;
 

  result: Result;
  count: any=[];
  quickdata=new Map();
  number: any=1;
  upcomdata: any;
  submitted: boolean;
  userId: any;
  public mobileform: FormGroup;
  ipAddress: any;
  phoneNumber: any;
  dailcode: any;
  phnumber: any;
  code: any;
  mobile: any;
  countrycode: any;
  errorMessage: any;
  cls: HTMLElement;
  email: any;
  error: any;
  password: string;
  show: boolean;
  hide = true;
  token: any;
  aval: any;
  qrcode: any;
  showDatafound: boolean;
  // spinnerType = SPINNER.circle;
  previousUrl: string = null;
  currentUrl: string = null;
  tickcount=0;
  constructor(
    public toastr: ToastrService,
    // private loader: NgxUiLoaderService,
    private authService:AuthencationGuard ,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public dialog: MatDialog,
    private el: ElementRef,
    private controlService: ControlService,
    public sharedata:CommondataService,
    public httpService: HttpService,
    public http:HttpClient,
    public location:Location,
    private loader:NgxUiLoaderService,
    private notifyService : NotificationService,
    private navigation:NavigationService,
    @Inject(DOCUMENT) private _document: Document

  ) {
    this.tickcount = JSON.parse(localStorage.getItem("tickcount"));
    // this.sharedata.ticketsArray.subscribe((msg: any) => {
    //   if (msg !== "") {
    //     console.log(msg)
    //     this.tickcount=msg
    //   }
    // });
    this.sharedata.ticketcount.subscribe((msg: any) => {
      if (msg !== "") {
        console.log(msg)
        this.tickcount=msg
      }else{
        this.tickcount=0;

      }

    });
    // var arr = [];
    // while(arr.length < 6){
    //     var r = Math.floor(Math.random() * 50) + 1;
    //     if(arr.indexOf(r) === -1) arr.push(r);
    // }
    // console.log(arr);
    this.sharedata.ticket
    console.log(this.sharedata.ticket);
    this.sharedata.count.subscribe((msg: any) => {
      if (msg !== "") {
        console.log(msg)
        this.data=msg
        // if (this.data > 0) {
        //   this.data--;
        //   // this.data.splice(i,1); 
        //   this.data.pop({ data: "" });
        // }
    //  this.count.push(this.data)
    //   var getKeysArray = Object.keys( this.count);
    //   var getValueArray = Object.values( this.count);
    //   console.log(getKeysArray)
    //   this.number=getKeysArray
    
      }
    });
    
    this.upcomdata = JSON.parse(localStorage.getItem("count"))
    this.secuemail = JSON.parse(localStorage.getItem("Securityverf"))
console.log(this.secuemail)
    this.createForm();
this.mobileForm();
// this.reloadComponent();
console.log(router.url , 'gfhhj');
   }
   currentRouter = this.router.url;
   refresh(): void {
    window.location.reload();
}
  ngOnInit(): void {
  //   this.router.events.pipe(
  //     filter((event) => event instanceof NavigationEnd)
  // ).subscribe((event: NavigationEnd) => {
  //    this.previousUrl = this.currentUrl;
  //    this.currentUrl = event.url;
  //    console.log(this.previousUrl , 'gfhhj');
  //    console.log(this.currentUrl , 'gfhhj');

  // });

  // this.router.events
  // .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
  // .subscribe((events: RoutesRecognized[]) => {
  //   console.log('previous url', events[0].urlAfterRedirects);
  //   console.log('current url', events[1].urlAfterRedirects);
  // });

  this.router.events
  .pipe( filter(        (evt:any)=>evt instanceof RoutesRecognized),pairwise())
  .subscribe((events: RoutesRecognized[]) =>{        
      console.log('previous',events[0].urlAfterRedirects);//previous url
      console.log('current url',events[1].urlAfterRedirects);//current url
    }    );

this.balance();
    this.token = JSON.parse(localStorage.getItem("data"));

    console.log(this.token)
  //////debugger
 
  
    
    
    // this.getIPAddress();
  //   this.token = JSON.parse(localStorage.getItem("data"));

  //  console.log(this.token)
// this.refresh();
  // this.onSubmit();
//   this.router.navigateByUrl('/header', { skipLocationChange: true }).then(() => {
//     this.router.navigate(['/header']);
// });

  }
  ngOnDestroy(){
    this.refresh();
  }
  backWithNavigation() {
    this.navigation.back();
  }
  backWithLocation() {
    this.location.back();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': [null, Validators.compose([
        Validators.required, Validators.minLength(8), PasswordStrengthService])],
        'code':['',[Validators.required,Validators.pattern('[0-9]{4}')]],

    });
  }
//   reLoad(){
//     this.router.navigate([this.currentRouter])
//  }
  // checkNumber(){
  //   if(this.phoneNumber != null){
  //     let Data:any = this.phoneNumber;
  //     console.log("Number :- ",Data.number);
  //     console.log("Code :- ",Data.internationalNumber);
  //     console.log("dialCode :- ",Data.dialCode);
  //   }
  
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
   
  mobileForm() {
    this.mobileform = this.formBuilder.group({
      
      'code':['',[Validators.required,Validators.pattern('[0-9]{4}')]],
      'password': ['', [Validators.required, Validators.minLength(6),PasswordStrengthService]],
     'phone': [''],

    });
  }
  //  get loginFormControl(){
  //   return this.loginForm.controls;
  // }
  // createaccount() {
  //   const dialogRef = this.dialog.open(CreateaccountComponent, {
  //     // width: '500px',
  //     // height: '700px',
  //     // data: { data: drawEdit, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //   });
  // }
  
  
  

  

 
  mobilelogin() {
  //////debugger
    localStorage.clear();
   

    
    this.submitted=true;
    //////debugger
    console.log(this.mobileform.value);
    this.code = this.mobileform.value;
    console.log( this.code['phone']);
this.phoneNumber=this.code['phone']

        this.mobile =  this.code['phone']['number'];
        // this.country =  idex['countryCode'];
        this.countrycode =  this.code['phone']['dialCode'];
        localStorage.setItem("countrycode", JSON.stringify( this.countrycode));
        localStorage.setItem("mobile", JSON.stringify(this.mobile));
        console.log( this.countrycode);
        console.log( this.mobile);
      //////debugger
      this.submitted=true;
      let jsonData = {
        mobile: this.mobile,
        password: this.mobileform.value.password,
        country_code:this.countrycode,
                device:'1',
        location:'Chennai',
        ip:'162.198.5.46',
      }
    this.httpService.userLogin(jsonData).subscribe((res: any) => {
      this.loader.start()
      if (res['success'] == true) {
        this.userId = this.loginForm.value.userid;
        // ls.set('userPass', { data: this.loginForm.value.password });
        console.log(res);
        localStorage.setItem("userid", JSON.stringify(res['admin']['mobile']));
        

        localStorage.setItem("data", JSON.stringify(res['data']));
        localStorage.setItem("loginState", JSON.stringify(true));
        localStorage.setItem("logintype", JSON.stringify("mobile"));
        // this.Email = res['admin']['email'];
        this.userId = res['admin']['mobile'];
        // localStorage.setItem("userid", JSON.stringify(this.loginForm.value.userid));
        localStorage.setItem("userdetails", JSON.stringify(res));
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 1000
        });      this.loader.stop();


        if(res['admin']['tfa_active'] == true){
          this.httpService.toastr.success('Enter To Google Authenticator Otp', '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
          this.router.navigateByUrl('/user-control/t2fa')

        }else if(res['admin']['tfa_active'] == false){
          this.httpService.toastr.success('Otp Send To Mobile', '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
          var json={key:1,value:this.countrycode,ke:2,vale:this.mobile}
          this.router.navigateByUrl('/user-control/twofactor',{state:{data:json}})
        }
      
      
//     setTimeout(() => {
//       window.location.reload();

//  }, 100);
        // this.router.navigate(['/user-control/twofactor']);

        // this.router.navigate(['/dashboard/dashboard']);


      }
       else if (res['success'] == false) {
      
        // this.httpService.toastr.error(res['message'], '', {
        //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
        // });
      }
    },(error) => {                              //Error callback
      console.log(error)
      // console.log(error)
      //   this.httpService.toastr.error(error,'',  {
      //     positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
      //   });
      this.error = error.status;
      console.log(this.error)

      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
this.httpService.toastr.error(this.errorMessage,'Status:400',  {
        positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
      });
   })
    


  }
  gotouser(){
    this.router.navigate(['/user-control/forgetpass'])
    localStorage.setItem("logintype", JSON.stringify("email"));

  }
  
  onSubmit() {
  //debugger
    localStorage.clear();  

      this.submitted=true;
      // this.loader.start();

      let jsonData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        device:'1',
        location:'Chennai',
        ip:'162.198.5.46',
      }
      this.httpService.userLogin(jsonData).subscribe( res => {
        this.loader.start();


        console.log(res);
        console.log(res['data']);
            //  this.token=res['data']
        if (res['success'] == true) {
          this.loader.stop();

          this.userId = this.loginForm.value.userid;
          // ls.set('userPass', { data: this.loginForm.value.password });
          console.log(res);
          this.email=res['admin']['email'];
          localStorage.setItem("userid", JSON.stringify(res['admin']['email']));
          localStorage.setItem("data", JSON.stringify(res['data']));
          localStorage.setItem("id", JSON.stringify(res['admin']['_id']));

          localStorage.setItem("logintype", JSON.stringify("email"));

          
          localStorage.setItem("loginState", JSON.stringify(true));
  
          this.userId = res['admin']['email'];
          // localStorage.setItem("userid", JSON.stringify(this.loginForm.value.userid));
          localStorage.setItem("userdetails", JSON.stringify(res));
          this.httpService.toastr.success(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
          if(res['admin']['tfa_active'] == true){
            this.httpService.toastr.success('Enter To Google Authenticator Otp', '', {
              positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
            });
            this.router.navigateByUrl('/user-control/t2fa')

          }else if(res['admin']['tfa_active'] == false){
            this.httpService.toastr.success('Otp Send To Email', '', {
              positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
            });
            var json={key:1,value:this.email,keys:2,values:res['admin']['tfa_active']}
          this.router.navigateByUrl('/user-control/twofactor',{state:{data:json}})
          }
        
          // this.twofactoremail();

          

          // setTimeout(function () {
          //  window.location.reload();
          // }, 100);

          // setTimeout(function () {
          //   this.router.navigateByUrl('/user-control/twofactor',{state:{data:json}})
          // }, 100);
      //  this.reLoad();
  
        }
         else if (res['success'] == false) {
        
          // this.httpService.toastr.error(res['message'], '', {
          //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
          // });
        }
      }, 
      (error) => {                              //Error callback
        // console.log(error)
        // this.httpService.toastr.error(error,'',  {
        //   positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
        // });
        this.error = error.status;
        console.log(this.error)

        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
this.httpService.toastr.error(this.errorMessage,'Status:400',  {
          positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
        });
     })
  
         }
  logoutUser() {
debugger
    if (
      localStorage.getItem("userid") != null ||
      localStorage.getItem("userid") != undefined
    ) {
      var userNumber = JSON.parse(localStorage.getItem("userid"));
      sessionStorage.setItem("previousLogin", JSON.stringify(userNumber));
console.log(userNumber );
      // this.loader.stop();
      let jsonObj = {
        userid: userNumber,
        ip:'162.198.5.46',
      };
      this.httpService.logoutSession(jsonObj).subscribe((resp) => {
        localStorage.clear();
        this.toastr.success("User has been logged off", "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
        this.router.navigateByUrl("/index");
        setTimeout(() => {
         document.location.reload();

        }, 100);
      });
    }
  }
  // getIPAddress()
  // {
  //   this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
  //     this.ipAddress = res.ip;
  //     console.log(this.ipAddress)
  //   });
  // }
  openaccountmob() {
  //////debugger
    console.log(this.mobileform.value);
    this.code = this.mobileform.value;
    console.log( this.code['phone']);
this.phoneNumber=this.code['phone']

        this.mobile =  this.code['phone']['number'];
        // this.country =  idex['countryCode'];
        this.countrycode =  this.code['phone']['dialCode'];
        

        console.log( this.countrycode);
        console.log( this.mobile);
      this.submitted=true;
      let jsonData = {
        email:"",
        mobile: this.mobile,
        password: this.mobileform.value.password,
        country_code:this.countrycode,
        pin:this.mobileform.value.code,
                device:'1',
        location:'Chennai',
        ip:'162.198.5.46',
      }
      this.httpService.createuser(jsonData).subscribe( res => {
        //////debugger
        console.log(res);

        if (res['success'] === true) {
          // ls.set('userPass', { data: this.loginForm.value.password });
          console.log(res);
         
  this.httpService.toastr.success(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
          });
          this.router.navigate(['/index']);
          // this.router.navigate(['/dashboard/dashboard']);
  
  
        }
         else if (res['success'] === false) {
        
          this.httpService.toastr.error(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
          });
        }
      }, 
      (error) => {                              //Error callback
        // console.log(error)
        // this.httpService.toastr.error(error,'',  {
        //   positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
        // });    
            this.errorMessage = error.error.message;
        console.log(this.errorMessage)
this.httpService.toastr.error(this.errorMessage, '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut:5000
        });
     });
    

    }
    openaccountemail() {
      //////debugger
        this.submitted=true;
        let jsonData = {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
          pin:this.loginForm.value.code,
                  device:'1',
          location:'Chennai',
          ip:'162.198.5.46',
        }
        this.httpService.createuser(jsonData).subscribe(( res: any) => {
          
          if (res['success'] == true) {
            // ls.set('userPass', { data: this.loginForm.value.password });
            console.log(res);
           this.httpService.toastr.success(res['message'], '', {
              positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
            });
    
            this.router.navigate(['/index']);
            // this.router.navigate(['/dashboard/dashboard']);
    
    
          }
           else if (res['success'] == false) {
          
            // this.httpService.toastr.error(res['message'], '', {
            //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
            // });
          }
        }, (error) => {                              //Error callback
          console.log(error)
          // this.httpService.toastr.error(error,'',  {
          //   positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
          // });    
                this.error = error.status;
          console.log(this.error)
  
          this.errorMessage = error.error.message;
          console.log(this.errorMessage)
  this.httpService.toastr.error(this.errorMessage,'Status:400',  {
            positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
          });
       })
        
      

      }
      verifyemail() {
        //////debugger
          // this.submitted=true;
          let jsonData = {
            email: this.loginForm.value.email,
            device:'1',
            location:'Chennai',
            ip:this.ipAddress,
          }
          this.httpService.forgetPassword(jsonData).subscribe(( res: any) => {
            
            if (res['success'] == true) {
              // ls.set('userPass', { data: this.loginForm.value.password });
              console.log(res);
             
              this.httpService.toastr.success(res['message'], '', {
                positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
              });
              // this.router.navigate(['/user-control/twofactor']);
              // this.router.navigate(['/dashboard/dashboard']);
      
      
            }
             else if (res['success'] == false) {
            
              
            }
          }, (error) => {                              //Error callback    
                    this.error = error.status;
            console.log(this.error)
    
            this.errorMessage = error.error.message;
            console.log(this.errorMessage)
    this.httpService.toastr.error(this.errorMessage,'Status:400',  {
              positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
            });
         })
        

        }
        signupotp() {
          console.log(this.mobileform.value);
    this.code = this.mobileform.value;
    console.log( this.code['phone']);
this.phoneNumber=this.code['phone']

        this.mobile =  this.code['phone']['number'];
        // this.country =  idex['countryCode'];
        this.countrycode =  this.code['phone']['dialCode'];
      
        console.log( this.countrycode);
        console.log( this.mobile);
          //////debugger
            // this.submitted=true;
            let jsonData = {
              email:'',
              mobile: this.mobile,
              country_code:this.countrycode,
              
            }
            this.httpService.signupotp(jsonData).subscribe( res => {
              
              if (res['success'] == true) {
                // ls.set('userPass', { data: this.loginForm.value.password });
                console.log(res);
               
                this.httpService.toastr.success(res['message'], '', {
                  positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
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
              // console.log(error)
              // this.httpService.toastr.error(error,'',  {
              //   positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
              // });       
                     this.error = error.status;
              console.log(this.error)
      
              this.errorMessage = error.error.message;
              console.log(this.errorMessage)
      this.httpService.toastr.error(this.errorMessage,'Status:400',  {
                positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
              });
           })
          

        
          }
          signupemailotp() {
           
            //////debugger
              // this.submitted=true;
              let jsonData = {
                email: this.loginForm.value.email,
                mobile: "",
                country_code:"",
              }
              this.httpService.signupotp(jsonData).subscribe(( res:any) => {
                
                if (res['success'] == true) {
                  // ls.set('userPass', { data: this.loginForm.value.password });
                  console.log(res);
                 
                  this.httpService.toastr.success(res['message'], '', {
                    positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
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
                // console.log(error)
                // this.httpService.toastr.error(error,'',  {
                //   positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
                // });      
                          this.error = error.status;
                console.log(this.error)
        
                this.errorMessage = error.error.message;
                console.log(this.errorMessage)
        this.httpService.toastr.error(this.errorMessage,'Status:400',  {
                  positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
                });
             })
            

          
            }
          //   refresh(): void {
          //     window.location.reload();
          // }
        
          twofactoremail() {
            //////debugger
              // localStorage.clear();
              this.submitted=true;
              let jsonData = {
                email: this.loginForm.value.email ,
                mobile:"",
                country_code:"",
                // pin:this.loginForm.value.code,
        
                // device:'1',
                // location:'Chennai',
                // ip:'162.198.5.46',
              }
              this.httpService.twofactorotp(jsonData).subscribe((res: any) => {
                
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
            balance(){
              //////debugger
              this.httpService.balancebtc().subscribe((res: any) => {
                console.log(res['BTC_fees']['BTC_fees']);
                this.aval = res['BTC_fees']['BTC_fees']
                
                localStorage.setItem("BTC", JSON.stringify(res['BTC_fees']['BTC_fees']));
                // localStorage.setItem("BTC", JSON.stringify('100'));
          
                this.qrcode=res['qrcode']
                if (this.data) {
                  if (this.data.length > 0) {
          
                if (res['success'] == true) {
                  this.showDatafound = true;
                  // this.searchuser();
          
                  // this.httpService.toastr.success(res['message'], '', {
                  //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
                  // });
                }
              }
            }
            else {
              this.showDatafound = false;
              console.log("No Data found");
            }
              }
              ,(error) => {                              //Error callback
                console.log(error)
                // console.log(error)
                //   this.httpService.toastr.error(error,'',  {
                //     positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
                //   });
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

