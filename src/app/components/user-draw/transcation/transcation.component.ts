import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
// function refresh() {
//   window .location.reload();
// }
@Component({
  selector: 'app-transcation',
  templateUrl: './transcation.component.html',
  styleUrls: ['./transcation.component.scss']
})
export class TranscationComponent implements OnInit {
//   get nativeWindow() : any {
//     return refresh();
//  }
  showDatafound: boolean;
  p: number[] = [];
  totalLength: any;
  item: any[];
  data: any;
  status:any =['Active','Pending','Cancel']
  searchText;
  username: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) { 
    // this.username = JSON.parse(localStorage.getItem("username"));

  }
  refresh(): void {
    window.location.reload();
}
  ngOnInit(): void {
    this.withdrawhistory();
  }

  withdrawhistory(){
    ////debugger
    this.httpService.withdrawhistory().subscribe((res: any) => {
      console.log(res['data'])
      this.data = res['data']
      if (this.data) {
        if (this.data.length > 0) {
      if (res['success'] == true) {
        // document.location.reload();
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
  ngOnDestroy(){
    this.refresh();
  }
}
