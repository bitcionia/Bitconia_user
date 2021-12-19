import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

  // window.location.reload();


@Component({
  selector: 'app-myticket',
  templateUrl: './myticket.component.html',
  styleUrls: ['./myticket.component.scss']
})
export class MyticketComponent implements OnInit {
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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) {
    if(history.state.data){
      console.log(history.state.data)
    }
   }

  ngOnInit(): void {
    this.last_draw();

  }
  
  last_draw(){
    debugger
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
  alldraw(){
    debugger
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
