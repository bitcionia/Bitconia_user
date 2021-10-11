import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.scss']
})
export class BuynowComponent implements OnInit {
  @ViewChild('bagCount' , {static: true}) bagCount: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  bagCountInc(){
    this.bagCount.nativeElement.value++ 
 }
 bagCountdec(){
   if( this.bagCount.nativeElement.value  > 0){
     this.bagCount.nativeElement.value-- 
   }
 }
}
