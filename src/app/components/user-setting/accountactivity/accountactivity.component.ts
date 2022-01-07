import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-accountactivity',
  templateUrl: './accountactivity.component.html',
  styleUrls: ['./accountactivity.component.scss']
})
export class AccountactivityComponent implements OnInit {
  data: any=[];
  showDatafound: boolean;
  p: number[] = [];
  totalLength: any;
  item: any[];
  username: any;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,

    public httpService: HttpService,

  ) { 
    // this.username = JSON.parse(localStorage.getItem("username"));

  }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    debugger
    this.httpService.getUser().subscribe((res: any) => {
      console.log(res['data'])
      this.data = res['data']
      if (this.data) {
        if (this.data.length > 0) {
      if (res['success'] == true) {
        this.showDatafound = true;
        // window.location.reload();
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
