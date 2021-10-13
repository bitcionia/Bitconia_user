import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { version } from 'process';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  siteKey:string="6LeB_cUcAAAAAOvGthvHU_Yk6q0f8_QOwPi7X8_a"
  constructor(


  ) {
    var arr = [];
    while(arr.length < 6){
        var r = Math.floor(Math.random() * 50) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
   }

  ngOnInit(): void {
 
  }
  
}
