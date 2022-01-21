import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../service/http.service';
function refresh() {
 // window .location.reload();
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  get nativeWindow() : any {
    return refresh();
 }
  list: any;
  name: any;
  time: any;
  myArray: any;
  price: any;
  count: any;
  win: any;
  seq: any;
  data1: any;
  showDatafound: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) { }
  refresh(): void {
    window.location.reload();
}
  ngOnInit(): void {
    this.pervdraw();
  }
  ngOnDestroy(){
    this.refresh();
  }
  gotoview(view) {
    // ////////debugger
    this.router.navigateByUrl('/user-Draw/drawres')
    localStorage.setItem("hisview", JSON.stringify(view));

  }
  pervdraw(){
    //////debugger
    this.httpService.perviousdraw().subscribe((res: any) => {
      console.log(res['data'])
      this.list=res['data']
      this.count=res['count']
      console.log(res['data'][0]['name'])
      console.log(res['data'][0]['start_time'])
      console.log(res['data'][0]['winning_sequence'])
      this.name=res['data'][0]['name']
      this.time=res['data'][0]['start_time']
      this.win=res['data'][0]['winning_price']
      this.price=res['data'][0]['price']

      this.seq=res['data'][0]['winning_sequence'].split(',');
     
      // this.myArray = this.seq.split(',');

     console.log(this.myArray)
      this.data1 = res['data']
      if (this.data1) {
        if (this.data1.length > 0) {
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
