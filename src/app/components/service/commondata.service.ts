import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {
  public activityMsg = new BehaviorSubject<any>("");
  public ticketnumber = new BehaviorSubject<any>("");

  public ticket = new BehaviorSubject<any>("");
  public countnum = new BehaviorSubject<any>("");

  activityLogShare = this.activityMsg.asObservable();
   ticketcount= this.ticketnumber.asObservable();

  countshare = this.activityMsg.asObservable();
  count= this.ticket.asObservable();
  countnu= this.countnum.asObservable();

  ticketsArray: Array<any> = [];
  editsArray: Array<any> = []

  constructor(
  ) { }

  countick(data) {
    this.ticketnumber.next(data);
  }
  activity(data) {
    this.activityMsg.next(data);
  }
  activitynum(data) {
    this.activityMsg.next(data);
  }
  ticketnum(data) {
    this.ticket.next(data);
  }
  countnumber(data) {
    this.ticketnumber.next(data);
  }
  // countdata(data) {
  //   this.count.next(data);
  // }
}