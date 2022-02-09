import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommondataService } from '../../service/commondata.service';
import { ControlService } from '../../service/control.service';
import { HttpService } from '../../service/http.service';
import { BalancepopupComponent } from '../balancepopup/balancepopup.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ticketdata: any;
  token: any;
  balance: any;
  ticketnum: number;
  tickdata: any;
  remain: number;
  error: any;
  errorMessage: any;
  draw_id: any;
  countdata: any=[];
  ticketcount: any[];
  ticketnumber:any[];
  key: any;
  ticknymbbv: any;
  constructor(private router: Router,public sharedata:CommondataService,
    public httpService: HttpService,    public dialog: MatDialog,

    ) {
     
    this.token = JSON.parse(localStorage.getItem("data"));

      this.balance = JSON.parse(localStorage.getItem("BTC"));    
        this.ticknymbbv = JSON.parse(localStorage.getItem("cart"));


   }

  ticketsArray: Array<any> = [];

  ngOnInit(): void {
    this.ticketcount=[];
      this.ticketsArray = this.sharedata.ticketsArray
      // console.log(this.ticketsArray)
      for(let idx of this.ticketsArray){
        console.log(idx.toString())
        // var temp=this.countdata.split(",");
        //  var num =`${temp[1]},${temp[2]},${temp[3]},${temp[4]},${temp[5]},${temp[6]}`;
        // this.ticketcount.push(num)
      
this.ticketdata=  idx['index']  
this.countdata=idx['values']
this.ticketcount.push(this.countdata)
 
    // console.log(this.ticketcount)
      }
      console.log(this.ticketcount)
      this.ticketnumber=[];

      for(let idx of this.ticketcount){
        console.log(idx.toString())
        // var temp=idx.toString().split(",");
        this.ticketnumber.push(idx.toString())

      }
console.log(this.ticketnumber)
localStorage.setItem("cart", JSON.stringify(this.ticketnumber));

// this.ticketnum=this.ticketdata*4.99
// this.tickdata=(this.ticketnum.toFixed(2))
// this.remain=this.balance- this.tickdata
// console.log(this.remain)
this.calcAmt()
  }

  editTicket(item){
    this.sharedata.editsArray = item
    this.router.navigateByUrl('user-Draw/buynow',{state:{data:'edit'}})
  }

  deleteItem(item){
    const insertIndex = this.ticketsArray.indexOf(item)
    this.ticketsArray.splice(insertIndex , 1)
    
    this.sharedata.countick(this.ticketsArray.length)
    localStorage.setItem("tick", JSON.stringify(this.ticketsArray));

    this.calcAmt()
  }
  delete(){
    localStorage.setItem("tick", JSON.stringify([]));

    this.ticketsArray=[]
    this.sharedata.countick(this.ticketsArray.length)
    this.calcAmt()
  }
  cartadd(){
//     console.log(history.state.data.key)
//     console.log(history.state.data.value)
// this.key=history.state.data.value
// console.log(this.key);
var id = JSON.parse(localStorage.getItem("tickid"));

    if(this.balance>=this.tickdata){
    //////debugger
        let jsonData = {
          tickets: this.ticketnumber,
          draw_id:id
        }
        this.httpService.cardadd (jsonData).subscribe( res => {
          
          if (res['success'] == true) {
            // localStorage.setItem("pin", JSON.stringify(res['data']['pin']));
    
            // ls.set('userPass', { data: this.loginForm.value.password });
            console.log(res['data']);
           this.draw_id=res['data']
            this.httpService.toastr.success(res['message'], '', {
              positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
            });
            setTimeout(() => {
              this.handleWarningAlert();
            }, 200);
            // var json={key:addticket,value:this.ticket}
    
            // this.router.navigateByUrl('user-Draw/cart',{state:{data:json}})
    
            // this.router.navigate(['/index']);
            // this.router.navigate(['/dashboard/dashboard']);
      
          }
           else if (res['success'] == false) {
          
            // this.httpService.toastr.error(res['message'], '', {
            //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
            // });
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
      else{
        this.showWarningAlert();
      }
    }
      showSuccessAlert() {
        Swal.fire('Yikes!', 'After 24 hours cerdit inyour wallet!', 'success')
      }
      handleWarningAlert() {

        Swal.fire({
          title: 'Balance',
          text: 'Available Balance 65.0 ',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'Proceed',
          cancelButtonText: 'Close',
        }).then((result) => {
    
          if (result.isConfirmed) {
    this.payment();
            // console.log('Clicked Yes, File deleted!');
    
          } else if (result.isDismissed) {
    
            // console.log('Clicked No, File is safe!');
    
          }
        })
    
      }

      calcAmt(){
        this.ticketnum=this.ticketsArray.length*4.99
this.tickdata=(this.ticketnum.toFixed(2))
this.remain=this.balance- this.tickdata
console.log(this.remain)
      }
      // payment() {
      //   const dialogRef = this.dialog.open(BalancepopupComponent, {
      //     width: '500px',
      //     height: '400px',
      //     data: { data: this.remain, count:this.ticketdata,id: this.draw_id }
      //   });
      //   dialogRef.afterClosed().subscribe((result) => {
      //   });
      // }
      payment(){
        //////debugger
            let jsonData = {
              // tickets: this.ticketdata,
              // draw_id:'617f94f685c94918109408a1',
              amount:this.remain,
              ticket_count:this.ticketdata,
              cart_id:this.draw_id
            }
            this.httpService.payadd (jsonData).subscribe( res => {
              
              if (res['success'] == true) {
                // localStorage.setItem("pin", JSON.stringify(res['data']['pin']));
        
                // ls.set('userPass', { data: this.loginForm.value.password });
                console.log(res['data']);
              //  this.draw_id=res['data']
                this.httpService.toastr.success(res['message'], '', {
                  positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
                });
                // this.dialogRef.close();
    
                // var json={key:addticket,value:this.ticket}
        
                // this.router.navigateByUrl('user-Draw/cart',{state:{data:json}})
        
                // this.router.navigate(['/index']);
                // this.router.navigate(['/dashboard/dashboard']);
          
              }
               else if (res['success'] == false) {
              
                // this.httpService.toastr.error(res['message'], '', {
                //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
                // });
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
          showWarningAlert() {
            Swal.fire('Hey!', 'Please Check your Avaliable Balance', 'warning')
          }
  }




// import { Component, ElementRef, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { CommondataService } from '../../service/commondata.service';
// import { ControlService } from '../../service/control.service';
// import { HttpService } from '../../service/http.service';
// import { BalancepopupComponent } from '../balancepopup/balancepopup.component';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {
//   ticketdata: any;
//   token: any;
//   balance: any;
//   ticketnum: number;
//   tickdata: any;
//   remain: number;
//   error: any;
//   errorMessage: any;
//   draw_id: any;
//   countdata: any=[];
//   ticketcount: any[];
//   ticketnumber:any[];
//   key: any;
//   ticknymbbv: any;
//   constructor(private router: Router,public sharedata:CommondataService,
//     public httpService: HttpService,    public dialog: MatDialog,

//     ) {
     
//     this.token = JSON.parse(localStorage.getItem("data"));

//       this.balance = JSON.parse(localStorage.getItem("BTC"));    
//         this.ticknymbbv = JSON.parse(localStorage.getItem("cart"));


//    }

//   ticketsArray: Array<any> = [];

//   ngOnInit(): void {
//     this.ticketcount=[];
//       this.ticketsArray = this.sharedata.ticketsArray
//       // console.log(this.ticketsArray)
//       for(let idx of this.ticketsArray){
//         console.log(idx.toString())
//         // var temp=this.countdata.split(",");
//         //  var num =`${temp[1]},${temp[2]},${temp[3]},${temp[4]},${temp[5]},${temp[6]}`;
//         // this.ticketcount.push(num)
      
// this.ticketdata=  idx['index']  
// this.countdata=idx['values']
// this.ticketcount.push(this.countdata)
 
//     // console.log(this.ticketcount)
//       }
//       console.log(this.ticketcount)
//       this.ticketnumber=[];

//       for(let idx of this.ticketcount){
//         console.log(idx.toString())
//         // var temp=idx.toString().split(",");
//         this.ticketnumber.push(idx.toString())

//       }
// console.log(this.ticketnumber)
// localStorage.setItem("cart", JSON.stringify(this.ticketnumber));

// // this.ticketnum=this.ticketdata*4.99
// // this.tickdata=(this.ticketnum.toFixed(2))
// // this.remain=this.balance- this.tickdata
// // console.log(this.remain)
// this.calcAmt()
//   }

//   editTicket(item){
//     this.sharedata.editsArray = item
//     this.router.navigateByUrl('user-Draw/buynow',{state:{data:'edit'}})
//   }

//   deleteItem(item){
//     const insertIndex = this.ticketsArray.indexOf(item)
//     this.ticketsArray.splice(insertIndex , 1)
    
//     this.sharedata.countick(this.ticketsArray.length)
//     localStorage.setItem("tick", JSON.stringify(this.ticketsArray));

//     this.calcAmt()
//   }
//   delete(){
//     localStorage.setItem("tick", JSON.stringify([]));

//     this.ticketsArray=[]
//     this.sharedata.countick(this.ticketsArray.length)
//     this.calcAmt()
//   }
//   cartadd(){
// //     console.log(history.state.data.key)
// //     console.log(history.state.data.value)
// // this.key=history.state.data.value
// // console.log(this.key);
// var id = JSON.parse(localStorage.getItem("tickid"));

//     if(this.balance>=this.tickdata){
//     //////debugger
//         let jsonData = {
//           tickets: this.ticketnumber,
//           draw_id:id
//         }
//         this.httpService.cardadd (jsonData).subscribe( res => {
          
//           if (res['success'] == true) {
//             // localStorage.setItem("pin", JSON.stringify(res['data']['pin']));
    
//             // ls.set('userPass', { data: this.loginForm.value.password });
//             console.log(res['data']);
//            this.draw_id=res['data']
//             this.httpService.toastr.success(res['message'], '', {
//               positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
//             });
//             setTimeout(() => {
//               this.handleWarningAlert();
//             }, 200);
//             // var json={key:addticket,value:this.ticket}
    
//             // this.router.navigateByUrl('user-Draw/cart',{state:{data:json}})
    
//             // this.router.navigate(['/index']);
//             // this.router.navigate(['/dashboard/dashboard']);
      
//           }
//            else if (res['success'] == false) {
          
//             // this.httpService.toastr.error(res['message'], '', {
//             //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
//             // });
//           }
//         }, (error) => {                              //Error callback
//           console.log(error)
//           this.error = error.status;
//           console.log(this.error)
    
//           this.errorMessage = error.error.message;
//           console.log(this.errorMessage)
//     this.httpService.toastr.error(this.errorMessage,' ',  {
//             positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
//           });
//        })
//       }
//       else{
//         this.showWarningAlert();
//       }
//     }
//       showSuccessAlert() {
//         Swal.fire('Yikes!', 'After 24 hours cerdit inyour wallet!', 'success')
//       }
//       handleWarningAlert() {

//         Swal.fire({
//           title: 'Balance',
//           text: 'Available Balance 65.0 ',
//           icon: 'success',
//           showCancelButton: true,
//           confirmButtonText: 'Proceed',
//           cancelButtonText: 'Close',
//         }).then((result) => {
    
//           if (result.isConfirmed) {
//     this.payment();
//             // console.log('Clicked Yes, File deleted!');
    
//           } else if (result.isDismissed) {
    
//             // console.log('Clicked No, File is safe!');
    
//           }
//         })
    
//       }

//       calcAmt(){
//         this.ticketnum=this.ticketsArray.length*4.99
// this.tickdata=(this.ticketnum.toFixed(2))
// this.remain=this.balance- this.tickdata
// console.log(this.remain)
//       }
//       // payment() {
//       //   const dialogRef = this.dialog.open(BalancepopupComponent, {
//       //     width: '500px',
//       //     height: '400px',
//       //     data: { data: this.remain, count:this.ticketdata,id: this.draw_id }
//       //   });
//       //   dialogRef.afterClosed().subscribe((result) => {
//       //   });
//       // }
//       payment(){
//         //////debugger
//             let jsonData = {
//               // tickets: this.ticketdata,
//               // draw_id:'617f94f685c94918109408a1',
//               amount:this.remain,
//               ticket_count:this.ticketdata,
//               cart_id:this.draw_id
//             }
//             this.httpService.payadd (jsonData).subscribe( res => {
              
//               if (res['success'] == true) {
//                 // localStorage.setItem("pin", JSON.stringify(res['data']['pin']));
        
//                 // ls.set('userPass', { data: this.loginForm.value.password });
//                 console.log(res['data']);
//               //  this.draw_id=res['data']
//                 this.httpService.toastr.success(res['message'], '', {
//                   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
//                 });
//                 // this.dialogRef.close();
    
//                 // var json={key:addticket,value:this.ticket}
        
//                 // this.router.navigateByUrl('user-Draw/cart',{state:{data:json}})
        
//                 // this.router.navigate(['/index']);
//                 // this.router.navigate(['/dashboard/dashboard']);
          
//               }
//                else if (res['success'] == false) {
              
//                 // this.httpService.toastr.error(res['message'], '', {
//                 //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 2000
//                 // });
//               }
//             }, (error) => {                              //Error callback
//               console.log(error)
//               this.error = error.status;
//               console.log(this.error)
        
//               this.errorMessage = error.error.message;
//               console.log(this.errorMessage)
//         this.httpService.toastr.error(this.errorMessage,' ',  {
//                 positionClass: 'toast-bottom-right',  closeButton: true, timeOut:5000
//               });
//            })
//           }
//           showWarningAlert() {
//             Swal.fire('Hey!', 'Please Check your Avaliable Balance', 'warning')
//           }
//   }
