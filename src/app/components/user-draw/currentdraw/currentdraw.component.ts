import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-currentdraw',
  templateUrl: './currentdraw.component.html',
  styleUrls: ['./currentdraw.component.scss']
})
export class CurrentdrawComponent implements OnInit {
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
  popoverTitle="sasd";
  popoverMessage="wewewwe";
  count1: any;
  name1: any;
  time1: any;
  win1: any;
  price1: any;
  seq1: any;
  id: any;
  time2: any;
  name2: any;
  win2: any;
  seq4: any;
  price4: any;
  win4: any;
  time4: any;
  name4: any;
  seq3: any;
  price3: any;
  win3: any;
  time3: any;
  name3: any;
  seq2: any;
  price2: any;
  id1: any;
  id2: any;
  id3: any;
  id4: any;
  name5: any;
  time5: any;
  win5: any;
  price5: any;
  id5: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) {
   }

  ngOnInit(): void {
    this.upcomingdraw();
    this.pervdraw();
  }
  
  upcomingdraw(){
    debugger
    this.httpService.upcomdraw().subscribe((res: any) => {
      console.log(res['data'])
      console.log(res['data'])
      this.count1 = res['count']
      this.name=res['data'][0]['name']
      this.time=res['data'][0]['end_time']
      this.win=res['data'][0]['winning_price']
      this.price=res['data'][0]['price']
      this.id=res['data'][0]['_id']
      this.seq=(res['data'][1]['winning_sequence'])
      this.name1=res['data'][1]['name']
      this.time1=res['data'][1]['start_time']
      this.win1=res['data'][1]['winning_price']
      this.price1=res['data'][1]['price']
      this.seq1=(res['data'][1]['winning_sequence']) 
      this.name2=res['data'][2]['name']
      this.time2=res['data'][2]['start_time']
      this.win2=res['data'][2]['winning_price']
      this.price2=res['data'][2]['price']
      this.seq2=(res['data'][2]['winning_sequence']) 
      this.name3=res['data'][3]['name']
      this.time3=res['data'][3]['start_time']
      this.win3=res['data'][3]['winning_price']
      this.price3=res['data'][3]['price']
      this.seq3=(res['data'][3]['winning_sequence'])
      this.name4=res['data'][4]['name']
      this.time4=res['data'][4]['start_time']
      this.win4=res['data'][4]['winning_price']
      this.price4=res['data'][4]['price']
      this.seq4=(res['data'][4]['winning_sequence'])
      this.name5=res['data'][5]['name']
      this.time5=res['data'][5]['start_time']
      this.win5=res['data'][5]['winning_price']
      this.price5=res['data'][5]['price']
      this.seq4=(res['data'][5]['winning_sequence'])
      this.id1=res['data'][1]['_id']
      this.id2=res['data'][2]['_id']
      this.id3=res['data'][3]['_id']
      this.id4=res['data'][4]['_id']
      this.id5=res['data'][5]['_id']
      this.data = res['data']
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
  pervdraw(){
    debugger
    this.httpService.perviousdraw().subscribe((res: any) => {
      console.log(res['count'])
      this.count=res['count']
      console.log(res['data'][0]['name'])
      console.log(res['data'][0]['start_time'])
      console.log(res['data'][0]['winning_sequence'])
      // this.name=res['data'][0]['name']
      // this.time=res['data'][0]['start_time']
      // this.win=res['data'][0]['winning_price']
      // this.price=res['data'][0]['price']

      // this.seq=(res['data'][0]['winning_sequence'])
     
      // this.myArray = this.seq.split(',');
     
      // this.myArray = this.seq.split(',');
console.log(this.myArray)
     
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
  gototick(data){
    debugger
    console.log(data)
    var json={key:'1',value:data}

    this.router.navigateByUrl('/user-Draw/buynow',{state:{data:json}})

  }
}
