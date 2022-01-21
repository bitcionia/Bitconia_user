import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  data: any;
  showDatafound: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,

    public httpService: HttpService,
  ) { }

  ngOnInit(): void {
  }
  getnotification(){
    //////debugger
    this.httpService.notification().subscribe((res: any) => {
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
