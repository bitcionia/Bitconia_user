import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../service/http.service';
import { PasswordStrengthService } from '../../service/password-strength.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  submitted: boolean;
  public loginForm: FormGroup;
  ipAddress: any;
  error: any;
  errorMessage: any;
  countrycode: any;
  mobile: any;
  email: any;
  constructor(
    public httpService: HttpService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    private http: HttpClient,
    public toastr: ToastrService,

  ) {
    if(history.state.data){
      console.log(history.state.data.value)
      console.log(history.state.data.values)
      this.countrycode=history.state.data.values
this.mobile=history.state.data.value
    } 
    this.createForm();
  }

  ngOnInit(): void {
    if(history.state.data){
      console.log(history.state.data.value1)
this.email=history.state.data.value1
    } 
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'newPass': ['', [Validators.required, Validators.minLength(6),PasswordStrengthService]],

      'confirmPass':['', [Validators.required, Validators.minLength(6),PasswordStrengthService]],

    });
  }
 
  onSubmit() {
    //debugger
      this.submitted=true;
      let jsonData = {
        mobile:this.mobile,
        country_code:this.countrycode,
        password: this.loginForm.value.newPass,
        device:'1',
        location:'Chennai',
        ip:'162.198.5.46',
      }
      this.httpService.resetPassword(jsonData).subscribe(( res: any) => {
        
        if (res['success'] == true) {
this.httpService.toastr.success(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
          });          console.log(res);
         
  
          this.router.navigate(['/index']);
          // this.router.navigate(['/dashboard/dashboard']);
  
  
        }
         else if (res['success'] == false) {
        
          // this.httpService.toastr.error(res['message'], '', {
          //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
          // });
        }
      },  (error) => {                              //Error callback
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
