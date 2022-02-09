import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
import Swal from 'sweetalert2';
import {
  Pipe,
  PipeTransform
} from "@angular/core";

@Component({
  selector: 'app-claimprize',
  templateUrl: './claimprize.component.html',
  styleUrls: ['./claimprize.component.scss']
})
export class ClaimprizeComponent implements OnInit {

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
  count3: any;
  count4: any;
  count2: any;
  iddata: any;
  price1=0;
  price2=0;
  price3=0;
  price4=0;
  totprice1: any;
  totprice2: any;
  totprice3: any;
  totprice4: any;
  errorMessage: any;
  error: any;
  aa: any;
  num: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) {

    var history = JSON.parse(localStorage.getItem("mytickview"));
console.log(history)
this.iddata=history['draw_id']
  this.time=history['endtime']
    this.name=history['drawname']
    this.price=history['price']
    // this.seq=history['winning_sequence'].split(',');
    console.log(this.seq)
  


   }

  ngOnInit(): void {
    // this.pervdraw();
    // this.last_draw();
    this.mydraw();
  }
  showSuccessAlert() {
    Swal.fire('Welcome!', ' Please Wait After 24 hours cerdit in your wallet!', 'success')
  }
  // pervdraw(){
  //   //////debugger
  //   this.httpService.perviousdraw().subscribe((res: any) => {
  //     console.log(res['count'])
  //     this.count=res['count']
  //     console.log(res['data'][0]['name'])
  //     console.log(res['data'][0]['start_time'])
  //     console.log(res['data'][0]['winning_sequence'])
  //     this.name=res['data'][0]['name']
  //     this.time=res['data'][0]['start_time']
  //     this.win=res['data'][0]['winning_price']
  //     this.price=res['data'][0]['price']

  //     this.seq=(res['data'][0]['winning_sequence'])
     
  //     this.myArray = this.seq.split(',');

  //    console.log(this.myArray)
   
  //     this.data1 = res['data']
  //     if (this.data1) {
  //       if (this.data1.length > 0) {
  //     if (res['success'] == true) {
  //       this.showDatafound = true;
  //       // this.searchuser();

  //       // this.httpService.toastr.success(res['message'], '', {
  //       //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
  //       // });
  //     }
  //   }
  // }
  // else {
  //   this.showDatafound = false;
  //   console.log("No Data found");
  // }
  //   });
  // }

  // last_draw(){
  //   //////debugger
  //   this.httpService.last_draw().subscribe((res: any) => {
  //     console.log(res['data'])
  //     this.data=res['data']
  //     console.log(res['data'][0]['name'])
  //     console.log(res['data'][0]['start_time'])
  //     console.log(res['data'][0]['winning_sequence'])
  //     this.name=res['data'][0]['name']
  //     this.time=res['data'][0]['start_time']
  //     this.win=res['data'][0]['winning_price']
  //     this.price=res['data'][0]['price']

  //     this.seq=(res['data'][0]['winning_sequence'])
     
  //     this.myArray = this.seq.split(',');

     
  //     this.data1 = res['data']
  //     if (this.data1) {
  //       if (this.data1.length > 0) {
  //     if (res['success'] == true) {
  //       this.showDatafound = true;
  //       // this.searchuser();

  //       // this.httpService.toastr.success(res['message'], '', {
  //       //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
  //       // });
  //     }
  //   }
  // }
  // else {
  //   this.showDatafound = false;
  //   console.log("No Data found");
  // }
  //   });
  // }

  mydraw(){
    //////debugger
    let jsonData={
      // id:this.id
      // id:'612480f7288d443094dca546',
      // user_id:'611a1282c3c0543978f01705',
      id:this.iddata,
      // Sequence_number:'010256785632',
    }
    this.httpService.mydrawwin(jsonData).subscribe((res: any) => {
      console.log(res['data'])
      this.data=res['drawdetails']
      this.totalprice=res['totalprice']
      this.price=res['price']
      this.count1=res['count1']
      this.count2=res['count2']
      this.count3=res['count3']
      this.count4=res['count4']
      this.price1=res['prize2']
      this.price2=res['prize2']
      this.price3=res['prize3']
      this.price4=res['prize4']
      this.totprice1=res['totalprice']['price_1']
      this.totprice2=res['totalprice']['price_2']
      this.totprice3=res['totalprice']['price_3']
      this.totprice4=res['totalprice']['price_4']
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
  
  claimwin(){
    //////debugger
    let jsonData={
      // id:this.id
      // id:'612480f7288d443094dca546',
      // user_id:'611a1282c3c0543978f01705',
      id:this.iddata,
      prize4:this.price4,
      prize3:this.price3,
      prize2:this.price2,
      prize1:this.price1
      // Sequence_number:'010256785632',
    }
    this.httpService.claimwin(jsonData).subscribe((res: any) => {
      console.log(res['message'])
     if(res['success']==true){
this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
     }
      else if(res['success']==false){
        this.httpService.toastr.error(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
      }
      }, (error) => {                              //Error callback
        console.log(error)
        this.error = error.status;
        console.log(this.error)
  
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
  this.httpService.toastr.error(this.errorMessage,' ',  {
          positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
        });
     })
    }
 
    
      

   
  
  
}
