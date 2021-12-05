import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { DespoitcoinComponent } from '../../user-popup/despoitcoin/despoitcoin.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  data: any;
  showDatafound: boolean;
  qrcode: any;
  amount:number;
  error: any;
  errorMessage: any;
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.depositqr();
  }
  despoitcion() {
    const dialogRef = this.dialog.open(DespoitcoinComponent, {
      // width: '600px',
      // height: '600px',
      // data: { data: userEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
  gototicket(){
    this.router.navigateByUrl('/myticket')

  }
  depositcreate(){
    debugger
    let JsonData = {   
         amount:this.amount
    }
    this.httpService.depositnew(JsonData).subscribe((res: any) => {
      console.log(res['data'])
      this.data = res['data']
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
    });
  }
  depositqr(){
    debugger
    this.httpService.depositqrcode().subscribe((res: any) => {
      console.log(res['data'])
      this.data = res['data']
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
