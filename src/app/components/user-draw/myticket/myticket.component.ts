import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
import { Location } from '@angular/common';
import { Observable,Subscription, interval  } from 'rxjs';

function refresh() {
  window .location.reload();
}

@Component({
  selector: 'app-myticket',
  templateUrl: './myticket.component.html',
  styleUrls: ['./myticket.component.scss']
})
export class MyticketComponent implements OnInit {
  get nativeWindow() : any {
    return refresh();
 }
  data: any;
  showDatafound: boolean;
  p: number[] = [];
  totalLength: any;
  item: any[];
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  data1: any;
  name: any;
  time: any;
  seq: any=[];
  split:string[];
  myString: any;
  myArray:any=[];
  win: any;
  price: any;
  count: any;
  totalprice: any;
  count1: any;
  count2: any;
  count4: any;
  count3: any;
  iddata: any;
  username: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,
    private location: Location,


    public httpService: HttpService,
  ) {

    if(history.state.data){
      console.log(history.state.data)
    }
    if (
      localStorage.getItem("username") != undefined ||
      localStorage.getItem("username") != null
    ) {
      // this.username = JSON.parse(localStorage.getItem("username"));
    }
   }
//    refresh(): void {
//     window.location.reload();
// }

  ngOnInit(): void {
    this.last_draw();
    // this.location.replaceState('/user-Draw/myticket');
  // this.refresh()
  }
   ngOnDestroy(){
    this.nativeWindow();
  }
  gotoview(view) {
    // ////debugger
    this.router.navigateByUrl('/user-Draw/claimprize')
    
    localStorage.setItem("mytickview", JSON.stringify(view));

  }
  last_draw(){
    //debugger
    this.httpService.last_draw().subscribe((res: any) => {
      console.log(res['data'])
      this.data=res['data']
      // console.log(res['data'][0]['name'])
      // console.log(res['data'][0]['start_time'])
      // console.log(res['data'][0]['winning_sequence'])
      // this.name=res['data'][0]['name']
      // this.time=res['data'][0]['start_time']
      // this.win=res['data'][0]['winning_price']
      // this.price=res['data'][0]['price']

      this.seq=res['data'][0]['winning_sequence'].split(',');
     
console.log(this.seq)
     
      this.data1 = res['data']
      if (this.data1) {
        if (this.data1.length > 0) {
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
  alldraw(){
    //debugger
    this.httpService.all_draw().subscribe((res: any) => {
      console.log(res['data'])
      this.data1=res['data']
      console.log(res['data']['winning_sequence'])
      this.count=res['data']['winning_sequence']
      // console.log(res['data'][0]['start_time'])
      // console.log(res['data'][0]['winning_sequence'])
      // this.name=res['data'][0]['name']
      // this.time=res['data'][0]['start_time']
      // this.win=res['data'][0]['winning_price']
      // this.price=res['data'][0]['price']

      // this.seq=(res['data'][0]['winning_sequence'])
     

     
      this.data1 = res['data']
      if (this.data1) {
        if (this.data1.length > 0) {
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
