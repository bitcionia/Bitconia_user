import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { version } from 'process';
import { CreateaccountComponent } from '../../popup/createaccount/createaccount.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  siteKey:string="6LeB_cUcAAAAAOvGthvHU_Yk6q0f8_QOwPi7X8_a"
  constructor(

    public dialog: MatDialog,

  ) {
    // var arr = [];
    // while(arr.length < 6){
    //     var r = Math.floor(Math.random() * 50) + 1;
    //     if(arr.indexOf(r) === -1) arr.push(r);
    // }
    // console.log(arr);
   }

  ngOnInit(): void {
 
  }
  createaccount() {
    const dialogRef = this.dialog.open(CreateaccountComponent, {
      // width: '500px',
      // height: '700px',
      // data: { data: drawEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }
  
}
