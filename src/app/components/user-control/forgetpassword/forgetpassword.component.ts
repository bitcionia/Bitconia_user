import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  public loginForm: FormGroup;
  submitted: boolean;
  ipAddress: any=[];

  constructor(
    public httpService: HttpService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    private http: HttpClient
  ) { 
   
    this.createForm();
  }

  ngOnInit(): void {
    this.getIPAddress();

  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
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
    debugger
      this.submitted=true;
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
         
  
          this.router.navigate(['/user-control/twofactor']);
          // this.router.navigate(['/dashboard/dashboard']);
  
  
        }
         else if (res['success'] == false) {
        
          // this.httpService.toastr.error(res['message'], '', {
          //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
          // });
        }
      }, (err) => {
        // this.toastr.error("invalid_credentials");
      });
      
  
    }
}
