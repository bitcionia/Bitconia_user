import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  public loginForm: FormGroup;
  public mobileform: FormGroup;

  submitted: boolean;
  ipAddress: any=[];
  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedArabEmirates, CountryISO.India];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
  });
  code: any;
  phoneNumber: any;
  mobile: any;
  countrycode: any;
  errorMessage: any;
  error: any;
  type: any;
  constructor(
    public httpService: HttpService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    private http: HttpClient,
    public toastr: ToastrService,

  ) { 
    this.type = JSON.parse(localStorage.getItem("logintype"));

    this.createForm();
    this.mobileForm();

  }

  ngOnInit(): void {
    this.getIPAddress();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
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
     'phone': [''],
      });
  }
  getIPAddress()
  {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
      console.log(this.ipAddress)
    });
  }
  onSubmit() {
    //debugger
      this.submitted=true;
      let jsonData = {
        email: this.loginForm.value.email,
        mobile:"",
        country_code:"",
        // pin:'1234',
        // device:'1',
        // location:'Chennai',
        // ip:'162.198.5.46',
      }
      this.httpService.reotp(jsonData).subscribe(( res: any) => {
        
        if (res['success'] == true) {
          // ls.set('userPass', { data: this.loginForm.value.password });
          console.log(res);
         
          this.httpService.toastr.success(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
          // this.router.navigateByUrl('/user-control/restpassword');

          // this.router.navigate(['/user-control/twofactor']);
          // this.router.navigate(['/dashboard/dashboard']);
  
  
        }
         else if (res['success'] == false) {
        
          this.httpService.toastr.error(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
          });
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
    gotorest(){
             this.router.navigateByUrl('/user-control/restpassword');

    }
    openphone(){
      //debugger
    console.log(this.mobileform.value);
    this.code = this.mobileform.value;
    console.log( this.code['phone']);
this.phoneNumber=this.code['phone']

        this.mobile =  this.code['phone']['number'];
        // this.country =  idex['countryCode'];
        this.countrycode =  this.code['phone']['dialCode'];
      
        console.log( this.countrycode);
        console.log( this.mobile);
      //debugger
      this.submitted=true;
      let jsonData = {
        mobile: this.mobile,
        country_code:this.countrycode,
        email:"",
        // pin:'1234',
        //         device:'1',
        // location:'Chennai',
        // ip:'162.198.5.46',
      }
      this.httpService.reotp(jsonData).subscribe( res => {
        
        if (res['success'] == true) {
          // ls.set('userPass', { data: this.loginForm.value.password });
          console.log(res);
         
          this.httpService.toastr.success(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
          // this.router.navigateByUrl('/user-control/restpassword');

          // this.router.navigate(['/user-control/twofactor']);
          // this.router.navigate(['/dashboard/dashboard']);
  
  
        }
         else if (res['success'] == false) {
        
          this.httpService.toastr.error(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
          });
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
     });
    }
    twofactemailotp() {
           
      //debugger
        this.submitted=true;
        let jsonData = {
          email: this.loginForm.value.email,
          mobile:"",
          country_code:"",
          pin:this.loginForm.value.code,
        }
        this.httpService.twofactorver(jsonData).subscribe( res => {
          
          if (res['success'] == true) {
            // ls.set('userPass', { data: this.loginForm.value.password });
            console.log(res);
           
            this.httpService.toastr.success(res['message'], '', {
              positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
            });
            this.router.navigateByUrl('/user-control/restpassword');
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
      twofactmobotp() {
         
        //debugger
        this.submitted=true;
        let jsonData = {
          email:"",
          mobile: this.mobile,
          country_code:this.countrycode,
          pin:this.mobileform.value.code,
          
          //         device:'1',
          // location:'Chennai',
          // ip:'162.198.5.46',
        }
          this.httpService.twofactorver(jsonData).subscribe( res => {
            
            if (res['success'] == true) {
              // ls.set('userPass', { data: this.loginForm.value.password });
              console.log(res);
             
              this.httpService.toastr.success(res['message'], '', {
                positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
              });
              this.router.navigateByUrl('/user-control/restpassword');
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
}
