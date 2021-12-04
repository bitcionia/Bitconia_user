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
    });
  }
}
