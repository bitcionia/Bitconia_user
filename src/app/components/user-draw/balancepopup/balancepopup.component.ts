import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-balancepopup',
  templateUrl: './balancepopup.component.html',
  styleUrls: ['./balancepopup.component.scss']
})
export class BalancepopupComponent implements OnInit {
  error: any;
  errorMessage: any;
  amount: any;
  count: any;
  id: any;

  constructor(public dialogRef: MatDialogRef<BalancepopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  
    public httpService: HttpService,
    ) { 
      console.log(this.data);
      this.amount=this.data['data']
      this.count=this.data['count']
      this.id=this.data['id']

    }

  ngOnInit(): void {
  }
  closeModelBox(): void {
    this.dialogRef.close();
  }
  
  payment(){
    ////debugger
        let jsonData = {
          // tickets: this.ticketdata,
          // draw_id:'617f94f685c94918109408a1',
          amount:this.amount,
          ticket_count:this.count,
          cart_id:this.id
        }
        this.httpService.payadd (jsonData).subscribe( res => {
          
          if (res['success'] == true) {
            // localStorage.setItem("pin", JSON.stringify(res['data']['pin']));
    
            // ls.set('userPass', { data: this.loginForm.value.password });
            console.log(res['data']);
          //  this.draw_id=res['data']
            this.httpService.toastr.success(res['message'], '', {
              positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
            });
            this.dialogRef.close();

            // var json={key:addticket,value:this.ticket}
    
            // this.router.navigateByUrl('user-Draw/cart',{state:{data:json}})
    
            // this.router.navigate(['/index']);
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
