import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-lotteryhistory',
  templateUrl: './lotteryhistory.component.html',
  styleUrls: ['./lotteryhistory.component.scss']
})
export class LotteryhistoryComponent implements OnInit {
  submitted: boolean;
  data: any;
  showDatafound: boolean;
  p: number[] = [];
  totalLength: any;
  item: any[];
  status:any =['Active','Pending','Cancel']
  searchText;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) { } 

  ngOnInit(): void {
    this.lotteryhistory();
  }
  lotteryhistory(){
    //debugger
    this.httpService.drawhistory().subscribe((res: any) => {
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
}
