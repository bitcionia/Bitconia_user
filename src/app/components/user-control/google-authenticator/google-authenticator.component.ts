import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../service/http.service';
import { PasswordStrengthService } from '../../service/password-strength.service';

@Component({
  selector: 'app-google-authenticator',
  templateUrl: './google-authenticator.component.html',
  styleUrls: ['./google-authenticator.component.scss']
})
export class GoogleAuthenticatorComponent implements OnInit {
  submitted: boolean;
  mobile: any;
  countrycode: any;
  public mobileform: FormGroup;
  public loginForm: FormGroup;
  code: any;
  phoneNumber: any;
  email: any;
  error: any;
  errorMessage: any;
  emailid: any;
  type: any;
  data: any;
  userdetails: any;
  act: any;
  constructor( public httpService: HttpService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    private http: HttpClient,
    public toastr: ToastrService,) { }

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
 
            g2faverifymob() {
              this.submitted = true;
          
              //////debugger
              let JsonData = {
                "email": "",
                mobile: this.mobile,
                country_code:this.countrycode,
                "otp":this.mobileform.value.code,
              }
              this.httpService.g2fverify(JsonData).subscribe(res => {
                // //////////debugger
                if (res['success'] == true) {
                  localStorage.setItem("Securityverf", JSON.stringify("true"));

                  this.httpService.toastr.success("OTP Verified", '', {
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
        this.httpService.toastr.error(this.errorMessage,'Status:400',  {
                  positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
                });
             })
              
            }
            
            g2faverifyemail() {
              this.submitted = true;
              let JsonData = {
                "email":this.email,
                "mobile":"",
                "otp": this.loginForm.value.code,
          
              }
              this.httpService.g2fverify(JsonData).subscribe(res => {
              
                if (res['success'] == true) {
                  localStorage.setItem("Securityverf", JSON.stringify("true"));

                  this.httpService.toastr.success("OTP Verified", '', {
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
        this.httpService.toastr.error(this.errorMessage,'Status:400',  {
                  positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
                });
             })
            }
         
  }
  