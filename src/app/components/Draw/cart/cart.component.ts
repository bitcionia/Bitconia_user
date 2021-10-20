import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from '../../service/commondata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  quickdata:any=[{}];
  quickdatall: any=[{}];
  constructor(    private router: Router,public sharedata:CommondataService,

    ) {

      this.sharedata.activityLogShare.subscribe((msg: any) => {
        // getScripInformation(msg);
        if (msg != "") {
          
          console.log(msg);
        }
        // this.greekDetails();
        
      });
     }

  ngOnInit(): void {
     this.quickdata = JSON.stringify(localStorage.getItem("key"));
     this.quickdatall = JSON.parse(localStorage.getItem("quickdatall"));

console.log(this.quickdata)
  }
gototicket(){
  this.router.navigateByUrl('/buynow')
}
}
