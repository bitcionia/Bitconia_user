import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { PasswordStrengthService } from '../../service/password-strength.service';

@Component({
  selector: 'app-accountsecurity',
  templateUrl: './accountsecurity.component.html',
  styleUrls: ['./accountsecurity.component.scss']
})
export class AccountsecurityComponent implements OnInit {
  public changepass: FormGroup;
  userDetails: any =[];
  userID: any;
  public loginForm: FormGroup;
  public g2faForm: FormGroup;
  public profileForm:FormGroup
id:any;
   submitted= false;
  error: any;
  errorMessage: any;
  name: any;
  dob: any;
  address: any;
  password: string;
  show: boolean;
  hide = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) {
    this.profile();

    this.id = JSON.parse(localStorage.getItem("id"));

   }

  ngOnInit(): void {
    this.updateuser();
    this.createForm();
this.gfen();
this.g2faathu();
  }

  profile(){
    this.profileForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(10)]],
      'dob': ['', [Validators.required, Validators.minLength(10)]],
      'address': ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  gfen(){
    
    this.g2faForm = this.formBuilder.group({
      'otp': ['', [Validators.required, Validators.minLength(10)]],
 
    });
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'oldPass': ['', [Validators.required, Validators.minLength(10),PasswordStrengthService]],
      'newPass': ['', [Validators.required, Validators.minLength(10),PasswordStrengthService]],
      'confirmPass': ['', [Validators.required, Validators.minLength(10),PasswordStrengthService]],
    });
  }
  get loginFormControl(){
    return this.changepass.controls;
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  changepassword() {
    this.submitted = true;

    debugger
    if (this.loginForm.value.newPass== this.loginForm.value.confirmPass) {
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
          this.httpService.toastr.success(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
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
this.httpService.toastr.error(this.errorMessage,'',  {
          positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
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
      // this.httpService.toastr.error("Password didn't match");
      // this.httpService.toastr.error("Password didn't match",
      //   '', {
      //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      // });
    }
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
  updateuser() {
    this.submitted = true;

    debugger
      let JsonData = {
        id:this.id,
        dob:this.profileForm.value.dob,
        username:this.profileForm.value.name,
        address:this.profileForm.value.address,
      }
      this.httpService.updateuser(JsonData).subscribe(res => {
        // ////debugger
        console.log(res['data']['username'])
        console.log(res['data']['dob'])
        console.log(res['data']['address'])
        this.name=res['data']['username']
        this.dob=res['data']['dob']
        this.address=res['data']['address']
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
      },
      (error) => {                              //Error callback
        console.log(error)
        this.error = error.status;
        console.log(this.error)

        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
this.httpService.toastr.error(this.errorMessage,'',  {
          positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
        });
     });
      
    
  }
}
