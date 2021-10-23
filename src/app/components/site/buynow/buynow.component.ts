import { analyzeFileForInjectables } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from '../../service/commondata.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.scss']
})
export class BuynowComponent implements OnInit {
  @ViewChild('bagCount', { static: true }) bagCount: ElementRef;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  data: any = [];
  data1: any = [];
  emptyarry: any = [];
  // quick:any={};
  count:any=[];

  quickdata: any = [];
  // quick: Map<number, []> = new Map<number, []>();
  quick=new Map([]);
  temp:any={};
  counterValue = 0;
  @Output() counterChange = new EventEmitter();
  languages: any;
  values: any=[];
  addticket: number;
  count1: any=[];

  @Input()
  get counter() {
    return this.counterValue;
  }

  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
      // this.data.splice(i,1); 
      this.data.pop({ data: "" });
    }


  }

  increment() {
    if (this.counter < 20) {
      this.counter++;
      this.data.push({ data: "" });
      this.emptyarry = [];
      // this.emptyarry=this.generatenumber(this.emptyarry);
      this.quick.set(this.counter, this.emptyarry)

      console.log(this.quick)
     this.addticket= this.counter*4.99
    }

  }

  constructor(
    private router:Router,
    public sharedata:CommondataService,
  ) { }

  ngOnInit(): void {

    // for(let idx =0;idx<3;idx++){
    //   this.data.push({data: ""});
    //   this.emptyarry=[];
    // //   // this.emptyarry=this.generatenumber(this.emptyarry);
    //   this.quick.set(idx,this.emptyarry)
    //   this.counter=idx

    // }
    
    console.log(this.counter)

    console.log(this.quick.size)
    let countDown = new Date('oct 20, 2021, 00:37:00').getTime();
    let time = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      //   if(distance < 0){
      //     clearInterval(time);
      //   }
      // }, 1000)
      if (distance < 0) {
        clearInterval(time);
        this.days = 0
        this.hours = 0
        this.minutes = 0
        this.seconds = 0

      }
    }, 1000);
  }
  //   bagCountInc(){
  //     this.bagCount.nativeElement.value++ 
  //  }
  //  bagCountdec(){
  //    if( this.bagCount.nativeElement.value  > 0){
  //      this.bagCount.nativeElement.value-- 
  //    }
  //  }

  Quickpick(data, i) {
    console.log(i)
    console.log(this.quick.get(i + 1))
    this.quickdata = this.quick.get(i + 1)

    var isadd = this.quickdata.indexOf(data) == -1 ? true : false;
    if (isadd) {
      if (this.quickdata.length < 6) {
        this.quickdata.push(data);
      }
    } else {
      // var popindex=this.data.indexOf(data)
      // delete .this.data(popindex);
      this.quickdata.forEach((value, index) => {
        if (value == data) this.quickdata.splice(index, 1);
      });
    }
  }

  getrandom() {
    return Math.floor((Math.random() * 49) + 1);
  }
  generatenumber(data, i) {
debugger
    data = [];
    for (let idex = data.length; idex < 6; idex++) {
      var temp = this.getrandom();
      while (data.indexOf(temp) != -1) {
        temp = this.getrandom();
      }
      data.push(temp);
    }
    // console.log(this.data)
    this.quick.set(i, data)
    // this.temp.push(this.quick)
    this.count.push(this.quick)

    var getKeysArray = Object.keys( this.count);
      var getValueArray = Object.values( this.count);
    // this.sharedata.activity(this.data)

      this.sharedata.activity(getValueArray)
// this.sharedata.data=this.count
    // localStorage.setItem("count", JSON.stringify(this.count));

    console.log(getKeysArray)
console.log(getValueArray)
  }
  closetick(data, i) {

    data = [];
    this.quick.set(i, data)


  }
  closequick() {
    // this.data.splice(i,1);
    this.decrement();
  }

  
  allpick() {

    for (let idx = 1; idx <= this.counter; idx++) {
      this.data1 = [];
      for (let idex = this.data1.length; idex < 6; idex++) {
        var temp = this.getrandom();
        while (this.data1.indexOf(temp) != -1) {
          temp = this.getrandom();
        }
        this.data1.push(temp);
        this.quick.set(idx, this.data1)
        

        // localStorage.setItem("quickdatall", JSON.stringify( this.data1));

      }
      console.log(this.quick)
      this.count1.push(this.quick)
      var getKeysArray = Object.keys( this.count1);
      var getValueArray = Object.values( this.count1);
    //   console.log(this.count1)
    // // this.sharedata.activity(this.data)

    //   // this.sharedata.countdata(getValueArray)
    this.sharedata.activity(getValueArray)
    }
    // console.log(this.data)
   


  }
  allerase() {

    for (let idx = 1; idx <= this.counter; idx++) {
      this.data1 = [];

      this.quick.set(idx, this.data1)
    }
  }
  addvalue(){
    this.values.push({value: ""});
  }
  gotocart(){
    
  }
  quickfast(quickfastlength){
    this.router.navigateByUrl('/cart')

    for (let idx = 1; idx <= quickfastlength; idx++) {
      this.data1 = [];
      for (let idex = this.data1.length; idex < 6; idex++) {
        var temp = this.getrandom();
        while (this.data1.indexOf(temp) != -1) {
          temp = this.getrandom();
        }
        this.data1.push(temp);
        this.quick.set(idx, this.data1)
        

        // localStorage.setItem("quickdatall", JSON.stringify( this.data1));

      }
      console.log(this.quick)
      this.count1.push(this.quick)
      var getKeysArray = Object.keys( this.count1);
      var getValueArray = Object.values( this.count1);
    //   console.log(this.count1)
    // // this.sharedata.activity(this.data)

    //   // this.sharedata.countdata(getValueArray)
    this.sharedata.activity(getValueArray)
    }

  }
}
