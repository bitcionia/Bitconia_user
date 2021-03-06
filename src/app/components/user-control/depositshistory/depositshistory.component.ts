import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-depositshistory',
  templateUrl: './depositshistory.component.html',
  styleUrls: ['./depositshistory.component.scss']
})
export class DepositshistoryComponent implements OnInit {
  submitted: boolean;
  modeOfPayments = [{id: 1, title: 'Active'}, {id: 2, title: 'Pending'}, {id: 3, title: 'Cancel'}];

  status:any =['Active','Pending','Cancel']
  data: any;
  showDatafound: boolean;
  
  p: number[] = [];
  totalLength: any;
  item: any[];
  public gen: string;
  searchText:string ;
  public loginForm: FormGroup;
  Status: any;
  moduleName ; 
  selectedExch: any=[];
  modeOfPayment = new FormControl('');
  code: any;
  dropdown = new FormControl();
  options = ['Active','Pending','Cancel'];
  testSubscription: Subscription;
  value: any;
//   Active=0;
//   Inactive=1;
// cancel=2;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,) {

     }

  ngOnInit(): void {
    this.createForm();

    this.deposithistory();
    this.testSubscription = this.dropdown.valueChanges
    // .pipe(debounceTime(100))
    .subscribe(value => console.log(this.value));
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'status':[''],
    });
    console.log(this.loginForm.value.status);

  }
  
  deposithistory(){
    //////debugger
    this.httpService.deposithis().subscribe((res: any) => {
      console.log(res['data'])
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
  
  depositsort(){
    this.submitted=true;
    // console.log(this.modeOfPayment.value);
    console.log( this.selectedExch);

//////debugger
if( this.selectedExch== 'Active'){



  let jsonData = {
    status:'1',
  }

   
    //////debugger
    this.httpService.depositsearch(jsonData).subscribe((res: any) => {
      console.log(res['data'])
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
    // this.deposithistory();

  }
  if(this.loginForm.value.status== 'Pending'){
    this.depositpending();
    }
    else{
      this.depositcancel();
    }
} 

depositpending(){
    let jsonData = {
      status:'1',
    }
  
     
      //////debugger
      this.httpService.depositsearch(jsonData).subscribe((res: any) => {
        console.log(res['data'])
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
      this.deposithistory();

  }
  depositcancel(){
      let jsonData = {
        status:'2',
      }
    
       
        //////debugger
        this.httpService.depositsearch(jsonData).subscribe((res: any) => {
          console.log(res['data'])
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
        this.deposithistory();

    }

}
