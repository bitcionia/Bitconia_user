import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { version } from 'process';
import { CreateaccountComponent } from '../../popup/createaccount/createaccount.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { SlideControlComponent } from 'ng-spc';
import { ControlInput, VertifyQuery} from 'ng-spc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  siteKey:string="6LeB_cUcAAAAAOvGthvHU_Yk6q0f8_QOwPi7X8_a"
  @ViewChild(SlideControlComponent, {static: true})
  slide: SlideControlComponent;

  public controlInput: ControlInput;

  private query: VertifyQuery;
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
    this.controlInput = new ControlInput(
      'https://api.xfunction.cn/slide/get',
      'https://api.xfunction.cn/slide/vertify',
      false
    );
  }
  private reset() {
    this.query.move = undefined;
    this.query.action = [];
    this.slide.reset();
  }

  successMatch( query: VertifyQuery) {   
    console.log(query);
    this.query = query;
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
