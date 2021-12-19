import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-pastdraw',
  templateUrl: './pastdraw.component.html',
  styleUrls: ['./pastdraw.component.scss']
})
export class PastdrawComponent implements OnInit {
  data: any;
  showDatafound: boolean;
  SeverSeed: any;
  Severhash: any;
  blocknumber: any;
  seq: any=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.pervdraw();
  }
  
  pervdraw(){
    debugger
    this.httpService.perviousdraw().subscribe((res: any) => {
      console.log(res['data'])
      this.data = res['data']
      this.SeverSeed=res['data']['0']['server_seed']
      this.Severhash=res['data']['0']['hash_server_seed']
      this. blocknumber=res['data']['0']['block_number']
      this.seq= [res['data']['0']['winning_sequence']]
      console.log(this.seq)
      
      // this.seq=seq
      // console.log(seq)

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
