import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { DespoitcoinComponent } from '../../user-popup/despoitcoin/despoitcoin.component';
import { Clipboard } from '@angular/cdk/clipboard';

// function refresh() {
//  // window .location.reload();
// }
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
//   get nativeWindow() : any {
//     return refresh();
//  }
  data: any;
  showDatafound: boolean;
  qrcode: any;
  amount:number;
  error: any;
  errorMessage: any;
  aval: any;
  username: any;
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,
    private clipboard: Clipboard,

    public httpService: HttpService
  ) {
    // this.username = JSON.parse(localStorage.getItem("username"));

   }
   refresh(): void {
    window.location.reload();
}
  ngOnInit(): void {
    this.depositqr();
    this.balance();
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
    //////debugger
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
    //////debugger
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
  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
    console.log(this.clipboard.copy(textToCopy))
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
    ngOnDestroy(){
    this.refresh();
  }
}
