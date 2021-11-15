import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  days: number;
  minutes: number;
  hours: number;
  seconds: number;
  urlSafe: SafeResourceUrl;
  showDatafound : boolean;
  displayURL: any;

  constructor(private Sanitizer : DomSanitizer) {
    this.displayURL = Sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/d6xn5uflUjg?autoplay=1');
  }
  

  ngOnInit(): void {

    // this.urlSafe = this.domSanitizer.bypassSecurityTrustResourceUrl('https://youtu.be/VDZkBusrvgg');

    let countDown = new Date('nov 1, 2021, 15:58:00').getTime();
    let time = setInterval(()=>{
      let now = new Date().getTime();
      let distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / ( 1000 * 60 ));
      this.seconds = Math.floor((distance % (1000 * 60 )) / 1000);
if(this.hours == 0 &&  this.minutes == 0 && this.seconds <10){
  this.showDatafound = true;

}
    //   if(distance < 0){
    //     clearInterval(time);
    //   }
    // }, 1000)
    if (distance < 0) {
      clearInterval(time);
      this.days= 0 
      this.hours= 0
      this.minutes= 0
      this.seconds= 0

      this.showDatafound = false;
    }
  }, 1000);
  }


}
