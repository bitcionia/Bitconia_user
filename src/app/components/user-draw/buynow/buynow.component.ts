import { analyzeFileForInjectables } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommondataService } from '../../service/commondata.service';
import { HttpService } from '../../service/http.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.scss']
})
export class BuynowComponent implements OnInit {
  key:any;
  tick: any=[];
  ticketdata: any;
  countdata: any;
  constructor(private router: Router,public sharedata:CommondataService,
    public httpService: HttpService,    public toastr: ToastrService,

    ) { 

    }


  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  ticketCounts: number = 0;
  amountOfTickets: any;
  generateTicketsArray: Array<any> = [];
  randomNumberArray: Array<any> = ['1','2','3','4','5','6','7','8','9','10',
  '11','12','13','14','15','16','17','18','19','20',
  '21','22','23','24','25','26','27','28','29','30',
  '31','32','33','34','35','36','37','38','39','40',
  '41','42','43','44','45','46','47','48','49'];
  isInitialOrEdit: boolean = false;

  ngOnInit(): void {

    
    if(history.state.data == 'edit'){
      this.isInitialOrEdit = true
      this.generateTicketsArray.push(this.sharedata.editsArray)
      this.ticketCounts = this.generateTicketsArray.length
      this.amountOfTickets=((this.ticketCounts*4.99).toFixed(2))
    }

    var isvaild = JSON.parse(localStorage.getItem('tick'))
    if(history.state.data !== 'edit' && isvaild){
      
      var istoken = JSON.parse(localStorage.getItem("data"));
      istoken ?  this.generateTicketsArray = isvaild : ''
      istoken ? this.ticketCounts = isvaild.length : ''
      this.amountOfTickets=((this.ticketCounts*4.99).toFixed(2))
    }
  }


  IncOrDecTickets(key){
    
    // if (key == 0) {
    

    //  this.addcount=(this.amountOfTickets.toFixed(2))
    
    // if(userNumber >=this.amountOfTickets){
      if((this.ticketCounts == 0 && key == 'inc') || this.ticketCounts > 0){
        var userNumber = JSON.parse(localStorage.getItem("BTC"));
      this.amountOfTickets= this.ticketCounts*4.99
    key == 'dec' && this.ticketCounts >= 0 ? this.ticketCounts-- : key == 'inc' &&  this.ticketCounts < 20 ? this.ticketCounts++ : '';
    var tempData = {
      index:this.ticketCounts,
      values:[]
    }
    key == 'dec' && this.ticketCounts >= 0 ? this.generateTicketsArray.splice(this.generateTicketsArray.length - 1 , 1) : key == 'inc' && this.ticketCounts <= 20 && this.generateTicketsArray.length < 20 ? this.generateTicketsArray.push(tempData) : '';

    this.amountOfTickets=((this.ticketCounts*4.99).toFixed(2))
      }
  // }
  this.sharedata.countick(this.ticketCounts)

  localStorage.setItem("tickarry", JSON.stringify(this.ticketCounts));

  }
// else{
//     this.toastr.error("not avalible balance", '', {
//       positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
//     });
//   }

  getrandom() {
    return Math.floor((Math.random() * 49) + 1);
  }
  generateOrDeleteRandomIndividual(item , key, type, index){
    ////debugger
    var tempRandom = []
   if(key == 'gen' &&( type == 'quick' ||  type == 'pack')){
    for(var i=0; i < 6; i++){
      tempRandom.push(this.getrandom())
    }
   }
   if((key == 'gen' || key == 'del') &&( type == 'quick' ||  type == 'pack')){
    for(let idex of this.generateTicketsArray){
      if(idex.index == item.index){
        idex.values = tempRandom
      }
    }
   }

   if(index == this.generateTicketsArray.length && type == 'pack'){
     this.naviGateCardPage()
   }
   
   if(type == 'individual' && key == 'insert'){
     for(let insert of this.generateTicketsArray){
       const number = this.generateTicketsArray.indexOf(insert)
       if(number == index){
        
        if((insert.values.length == 1 && insert.values[0] == item) || 
        (insert.values.length == 2 && (insert.values[0] == item || insert.values[1] == item)) || 
        (insert.values.length == 3 && (insert.values[0] == item || insert.values[1] == item || insert.values[2] == item)) ||
        (insert.values.length == 4 && (insert.values[0] == item || insert.values[1] == item || insert.values[2] == item || insert.values[3] == item)) ||
        (insert.values.length == 5 && (insert.values[0] == item || insert.values[1] == item || insert.values[2] == item || insert.values[3] == item || insert.values[4] == item)) || 
        (insert.values.length == 6 && (insert.values[0] == item || insert.values[1] == item || insert.values[2] == item || insert.values[3] == item || insert.values[4] == item || insert.values[5] == item))){
        
          
          insert.values = insert.values.filter(function(value, index, arr){ 
            return value != item;
        });
              break;
        }if(insert.values.length == 0 || (insert.values.length == 1 && insert.values[0] !== item) || 
        (insert.values.length == 2 && (insert.values[0] !== item && insert.values[1] !== item)) || 
        (insert.values.length == 3 && (insert.values[0] !== item && insert.values[1] !== item && insert.values[2] !== item)) ||
        (insert.values.length == 4 && (insert.values[0] !== item && insert.values[1] !== item && insert.values[2] !== item && insert.values[3] !== item)) ||
        (insert.values.length == 5 && (insert.values[0] !== item && insert.values[1] !== item && insert.values[2] !== item && insert.values[3] !== item && insert.values[4] !== item))){
          insert.values.push(item);
          break;
        } 
        
        // if(insert.values.length == 6){
          
        //   for(let val of insert.values){
        //     const insertIndex = insert.values.indexOf(val)
        //     if(val == item){
        //       insert.values.splice(insertIndex , 1)
        //       break;
        //     }
        //   }
        //   break;
        // }
      //  if(insert.values.length > 0 && insert.values.length < 6){
      //    ////debugger
      //    for(let val of insert.values){
      //      const insertIndex = insert.values.indexOf(val)
      //      if(val == item){
      //       insert.values.splice(insertIndex , 1)
      //       if(insertIndex == insert.values.length) {
      //         break;
      //       }
      //      }if(val != item){
      //       insert.values.push(item)
      //       if(insertIndex == insert.values.length) {
      //         break;
              
      //       }
      //      }
      //    }
      //    break;
      //  }
      }
     }
   }
  }
  removeTickets(item){
    const number = this.generateTicketsArray.indexOf(item)
    if(number != -1){
      this.generateTicketsArray.splice(number, 1)
    }  
    this.ticketCounts-- ;
    this.amountOfTickets=((this.ticketCounts*4.99).toFixed(2))
  }
  naviGateCardPage(){

    if(history.state.data == 'edit'){
      for(let item of this.sharedata.ticketsArray){
        for (let idex of this.generateTicketsArray){
          if(item.index == idex.index){
            item.values = idex.values
          }
        }
      }
    }else{
var isvaild = 0;

      this.sharedata.ticketsArray = this.generateTicketsArray;

      console.log( this.sharedata.ticketsArray)
      localStorage.setItem("tick", JSON.stringify(this.sharedata.ticketsArray));
      
    }
for(let item of this.generateTicketsArray){
  if(item.values.length > 0){
    isvaild = isvaild + 1
  }
}
if(isvaild == this.generateTicketsArray.length || history.state.data == 'edit'){
  this.router.navigateByUrl('user-Draw/cart')
}
    

  }
  packagePick(length){
    if(length !== 'all'){
      this.sharedata.countick(length)

    for(var i = 1; i<=length; i++){
      var tempData = {
        index: i,
        values:[]
      }
      this.generateTicketsArray.push(tempData)
    }
  }
    for(let item of this.generateTicketsArray){
      this.generateOrDeleteRandomIndividual(item, 'gen', 'pack', length)
    }
  }
  eraseAll(){
    this.generateTicketsArray = [];
    this.ticketCounts = 0
  }
}
