import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

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
   submitted= false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.createForm();

  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'oldPass': ['', [Validators.required, Validators.minLength(10)]],
      'newPass': ['', [Validators.required, Validators.minLength(10)]],
      'confirmPass': ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  get loginFormControl(){
    return this.changepass.controls;
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
      })
    } else {
      // this.httpService.toastr.error("Password didn't match");
      // this.httpService.toastr.error("Password didn't match",
      //   '', {
      //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      // });
    }
  }
}
