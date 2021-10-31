import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DespoitcoinComponent } from '../../user-popup/despoitcoin/despoitcoin.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
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
}
