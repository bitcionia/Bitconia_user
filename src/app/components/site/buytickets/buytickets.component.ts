import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buytickets',
  templateUrl: './buytickets.component.html',
  styleUrls: ['./buytickets.component.scss']
})
export class BuyticketsComponent implements OnInit {
  data: any=[];

  constructor() { 
  }

  ngOnInit(): void {
    // for(let idex=0;idex<6; idex++){
    //   var temp=this.getrandom();
    //   while(this.data.indexOf(temp)!= -1){
    //   temp=this.getrandom();
    //   }
    //   this.data.push (temp);
    //   }
    //   console.log(this.data)
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
