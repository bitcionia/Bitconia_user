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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
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
  private query: VertifyQuery;
  @Input() controlInput: ControlInput;
  @Output() successMatch: EventEmitter<VertifyQuery> = new EventEmitter();

  private slider: any;
  private puzzleBefore: any;
  private sliderContainer: any;
  private sliderMask: any;
  private sliderText: any;
  private puzzleBox: any;
  private puzzleBase: any;
  private puzzleMask: any;


  isMouseDown = false;
  private trail: number[] = [];
  private originX: any;
  private originY: any;
  private w: any = 310; // basePuzzle's width
  private h: any = 155; // basePuzzle's height
  private L: any = 62; // puzzle's width

  private pngBase64 = 'assets/images/logo.png';
  private jpgBase64 = 'assets/images/logo.png';

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
    public http:HttpClient

  ) {
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
    this.createForm();
this.mobileForm();

   }

  ngOnInit(): void {
  
    this.slider = this.el.nativeElement.querySelector('.slider');
    this.puzzleBefore = this.el.nativeElement.querySelector('.puzzleBefore');
    this.sliderContainer = this.el.nativeElement.querySelector('.sliderContainer');
    this.sliderMask = this.el.nativeElement.querySelector('.sliderMask');
    this.sliderText = this.el.nativeElement.querySelector('.sliderText');
    this.puzzleBox = this.el.nativeElement.querySelector('.puzzleBox');
    this.puzzleBase = this.el.nativeElement.querySelector('.puzzleBase');
    this.puzzleMask = this.el.nativeElement.querySelector('.puzzleMask');
    this.draw();
    if (this.controlInput.showPuzzle) {
      this.puzzleBox.style.display = 'block';
    }

    this.resetWindow();
    window.onresize = () => {
      this.resetWindow();
    };
    this.getIPAddress();

   
  
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
 
  // checkNumber(){
  //   if(this.phoneNumber != null){
  //     let Data:any = this.phoneNumber;
  //     console.log("Number :- ",Data.number);
  //     console.log("Code :- ",Data.internationalNumber);
  //     console.log("dialCode :- ",Data.dialCode);
  //   }
  

   
  mobileForm() {
    this.mobileform = this.formBuilder.group({
      
      'code':[''],
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
  
  resetWindow() {
    // console.log(this.sliderContainer.offsetLeft);
    this.puzzleBox.style.left = this.sliderContainer.offsetLeft + 1 + 'px';
  }


  touchStart(e: any) {

    this.originX = e.clientX || e.touches[0].clientX;
    this.originY = e.clientY || e.touches[0].clientY;
    this.isMouseDown = true;
    this.puzzleBox.style.display = 'block';
    this.puzzleMask.style.display = 'block';

  }


  touchMove(e: any) {

    // console.log(this.isMouseDown);
    if (!this.isMouseDown) {
      return false;
    }

    const eventX = e.clientX || e.touches[0].clientX;
    const eventY = e.clientY || e.touches[0].clientY;

    const moveX = eventX - this.originX;
    const moveY = eventY - this.originY;
    if (moveX < 0 || moveX + 38 >= this.w) {
      return false;
    }
    this.slider.style.left = moveX + 'px';
    const blockLeft = (this.w - this.L) / (this.w - 40) * moveX;
    this.puzzleBefore.style.left = blockLeft + 'px';
    this.sliderContainer.classList.add('sliderContainer_active');
    this.sliderMask.style.width = moveX + 'px';
    this.trail.push(moveY);

  }

  touchEnd(e: any) {

    // console.log('touchend');
    if (!this.isMouseDown) {
      return false;
    }
    this.isMouseDown = false;

    this.sliderContainer.classList.remove('sliderContainer_active');
    this.puzzleMask.style.display = 'none';

    const eventX = e.clientX || e.changedTouches[0].clientX;
    if (eventX === this.originX) {
      return false;
    }

    const query: VertifyQuery = {move: parseInt(this.puzzleBefore.style.left, 10), action: undefined};
    this.controlService.vertifyAuthImage(this.controlInput.firstConfirmUrl, query)
    .subscribe(
      (data: Result) => {
        this.result = { ...data };
        if (this.result.success) {
          query.action = this.trail;
          this.successMatch.emit(query);
          this.sliderContainer.classList.add('sliderContainer_success');
          this.puzzleBox.style.display = 'none';
        } else {
          this.sliderContainer.classList.add('sliderContainer_fail');
          this.sliderText.innerHTML = 'Try again';
          setTimeout(() => {
            this.reset();
          }, 1000);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        setTimeout(() => {
          this.reset();
        }, 1000);
      }
    );

  }
  

  

  reset() {
    this.slider.style.left = 0;
    this.puzzleBefore.style.left = 0;
    this.sliderMask.style.width = 0;
    this.sliderContainer.className = 'sliderContainer';
    this.trail = [];
    // 重新调用
    this.draw();
  }

  draw() {
    this.controlService.getAuthImage(this.controlInput.genUrl).subscribe((data: Result) => {
      this.result = { ...data };
      if (this.result.success) {
        this.puzzleBase.querySelector('img').src = this.jpgBase64 + this.result.data.bigImage;
        this.puzzleBefore.querySelector('img').src = this.pngBase64 + this.result.data.smallImage;
        this.puzzleBefore.style.top = this.result.data.yheight + 'px';
      } else {
        console.log(this.result);
      }
    },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  mobilelogin() {
  debugger
    localStorage.clear();
    this.submitted=true;
    debugger
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
      debugger
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
      
      if (res['success'] == true) {
        this.userId = this.loginForm.value.userid;
        // ls.set('userPass', { data: this.loginForm.value.password });
        console.log(res);
        localStorage.setItem("userid", JSON.stringify(res['admin']['mobile']));
        localStorage.setItem("data", JSON.stringify(res['data']));
        localStorage.setItem("loginState", JSON.stringify(true));

        this.userId = res['admin']['mobile'];
        // localStorage.setItem("userid", JSON.stringify(this.loginForm.value.userid));
        localStorage.setItem("userdetails", JSON.stringify(res));
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 1000
        });
        var json={key:1,value:this.countrycode,ke:2,vale:this.mobile}
    this.router.navigateByUrl('/user-control/twofactor',{state:{data:json}})
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
  onSubmit() {
    debugger
      localStorage.clear();
      this.submitted=true;
      let jsonData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        device:'1',
        location:'Chennai',
        ip:'162.198.5.46',
      }
      this.httpService.userLogin(jsonData).subscribe( res => {
        console.log(res);

        if (res['success'] == true) {
          this.userId = this.loginForm.value.userid;
          // ls.set('userPass', { data: this.loginForm.value.password });
          console.log(res);
          this.email=res['admin']['email'];
          localStorage.setItem("userid", JSON.stringify(res['admin']['email']));
          localStorage.setItem("data", JSON.stringify(res['data']));
          localStorage.setItem("loginState", JSON.stringify(true));
  
          this.userId = res['admin']['email'];
          // localStorage.setItem("userid", JSON.stringify(this.loginForm.value.userid));
          localStorage.setItem("userdetails", JSON.stringify(res));
          this.httpService.toastr.success(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
          var json={key:1,value:this.email}
          this.router.navigateByUrl('/user-control/twofactor',{state:{data:json}})
          // this.router.navigate(['/user-control/twofactor']);
          // this.router.navigate(['/dashboard/dashboard']);
  
  
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
      };
      this.httpService.logoutSession(jsonObj).subscribe((resp) => {
        localStorage.clear();
        this.toastr.success("User has been logged off", "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
        this.router.navigateByUrl("/index");
      });
    }
  }
  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
      console.log(this.ipAddress)
    });
  }
  openaccountmob() {
  debugger
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
        debugger
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
      debugger
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
      verifyemail() {
        debugger
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
          debugger
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
           
            debugger
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
     
}

