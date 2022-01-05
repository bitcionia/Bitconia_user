import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-drawresult',
  templateUrl: './drawresult.component.html',
  styleUrls: ['./drawresult.component.scss']
})
export class DrawresultComponent implements OnInit {
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
  list:any;
  server: any;
  block: any;
  blhash: any;
  hash: any;
  name1: any;
  time1: any;
  win1: any;
  price1: any;
  seq1: any;
  server1: any;
  iddata: any;
  totalprice: any;
  count2: any;
  count1: any;
  count4: any;
  count3: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) {

    var history = JSON.parse(localStorage.getItem("hisview"));
console.log(history)

this.name=history['name']
    this.time=history['start_time']
    this.win=history['winning_price']
    this.price=history['price']
    this.seq=history['winning_sequence'].split(',')
    this.server=history['server_seed']
    this.blhash=history['block_hash']
    this.block=history['block_number']
    this.hash=history['hash_server_seed']
    this.iddata=history['_id']

   }

  ngOnInit(): void {
    this.draw();
  }
  
  draw(){
    debugger
    let jsonData={
      // id:this.id
      // id:'612480f7288d443094dca546',
      // user_id:'611a1282c3c0543978f01705',
      id:this.iddata,
      // Sequence_number:'010256785632',
    }
    this.httpService.drawwin(jsonData).subscribe((res: any) => {
      console.log(res['data'])
      this.data=res['drawdetails']
      this.totalprice=res['totalprice']
      this.price=res['price']
      this.count1=res['count1']
      this.count2=res['count2']
      this.count3=res['count3']
      this.count4=res['count4']

      console.log(this.data)
      console.log(this.totalprice)
      console.log(this.price)

      // this.data=res['drawdetails']

      // console.log(res['data'][0]['name'])
      // console.log(res['data'][0]['start_time'])
      // console.log(res['data'][0]['winning_sequence'])
      // this.name=res['data'][0]['name']
      // this.time=res['data'][0]['start_time']
      // this.win=res['data'][0]['winning_price']
      // this.price=res['data'][0]['price']

      // this.seq=(res['data'][0]['winning_sequence'])
     
      // this.myArray = this.seq.split(',');

     
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
