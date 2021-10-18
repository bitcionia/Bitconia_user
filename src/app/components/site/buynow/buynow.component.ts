import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.scss']
})
export class BuynowComponent implements OnInit {
  @ViewChild('bagCount' , {static: true}) bagCount: ElementRef;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  data: any=[];

  constructor() { }

  ngOnInit(): void {
    let countDown = new Date('oct 20, 2021, 00:37:00').getTime();
    let time = setInterval(()=>{
      let now = new Date().getTime();
      let distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / ( 1000 * 60 ));
      this.seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    //   if(distance < 0){
    //     clearInterval(time);
    //   }
    // }, 1000)
    if (distance < 0) {
      clearInterval(time);
      this.days= 0 
      this.hours= 0
      this.minutes= 0
      this.seconds= 0

    }
  }, 1000);
  }
  bagCountInc(){
    this.bagCount.nativeElement.value++ 
 }
 bagCountdec(){
   if( this.bagCount.nativeElement.value  > 0){
     this.bagCount.nativeElement.value-- 
   }
 }
 
 Quickpick(data){
  var isadd= this.data.indexOf(data)==-1? true :false;
  if(isadd){
    if(this.data.length<6){
    this.data.push(data);
    }
  }else{
    // var popindex=this.data.indexOf(data)
    // delete .this.data(popindex);
this.data.forEach((value,index)=>{
      if(value==data) this.data.splice(index,1);
  });
  }
console.log(data)
}

getrandom(){
  return Math.floor((Math.random()*49)+1);
}
generatenumber(){
  this.data=[];
  for(let idex=this.data.length;idex<6; idex++){
    var temp=this.getrandom();
    while(this.data.indexOf(temp)!= -1){
    temp=this.getrandom();
    }
    this.data.push (temp);
    }
    console.log(this.data)
      }
      closetick(){
        this.data=[];

      }
}
